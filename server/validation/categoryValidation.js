"use strict"

const Joi = require("Joi")


class CategoryValidation {

    default () {
        return Joi.object().keys({
            catname: Joi.string().required(),
            userid: Joi.string().required(),
            })
    }
}

module.exports = function () {
    let validation = new CategoryValidation();

    return validation
}