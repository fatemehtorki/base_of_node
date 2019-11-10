"use strict"

const Joi = require("Joi")


class ProductValidation {

    default () {
        return Joi.object().keys({
            barcode: Joi.string().trim().required(),
            title: Joi.string().required(),
            category: Joi.string(),
            producer:Joi.string(),
            picture:Joi.string()

        })
    }

   

}

module.exports = function () {
    
    let validation = new ProductValidation();

    return validation
}