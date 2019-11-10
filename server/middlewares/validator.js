"use strict"

const Joi = require("joi")
const validationModel = require("@validation")
const ErrorModel = require('@error/error')

let validations = {
    "user": {
        scopes: {
            default: validationModel.user.default(),
            login: validationModel.user.login()
        }
    },
    "product": {
        scopes: {
            default: validationModel.product.default(),
            
        }
    },

    "category": validationModel.category.default() ,
    "price":validationModel.price.default() ,
}

const scopeExists = (validator, scope) => {

    return Object.keys(validator.scopes).find(key => key == scope) != undefined
}

const getSchema = (model, scope) => {
    let validator = validations[model]

    if (!validator)
        throw new Error("validation does not exist")

    if (validator.scopes) {

        if (scope) {

            if (!scopeExists(validator, scope)) {

                throw new Error(`scope ${scope} does not exist in ${model} validator`)
            }
        }

        return validator.scopes[scope]

    }

    return validator

}


const validate = (model, object, scope) => {
    return Joi.validate(object, getSchema(model, scope), {
        allowUnknown: true,
        abortEarly: false
    })
}

module.exports = function validationMiddleware(model, scope) {

    return (req, res, next) => {

        const validationResult = validate(model, req.body, scope)
        if (validationResult.error) {

            let errorsMessage = validationResult.error.details.map(error => {

                let message = error.message
                return {
                    message
                }
            })

            throw new ErrorModel(errorsMessage, statusCode.BAD_REQUEST)
        }

        next()
    }
}