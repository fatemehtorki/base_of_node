"use strict"

const Joi = require("Joi")


class UserValidation {

    default () {
        return Joi.object().keys({
            email: Joi.string().trim().email().lowercase().required(),
            username: Joi.string().min(5).required(),
            password: Joi.string().min(8).required()

        })
    }

    login() {
        return Joi.object().keys({
            username: Joi.string().min(5).required(),
            password: Joi.string().min(8).required()

        })
    }

}

module.exports = function () {
    let validation = new UserValidation();

    return validation
}