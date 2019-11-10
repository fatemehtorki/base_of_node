"use strict"
const HttpStatus = require('http-status-codes');
global.statusCode = HttpStatus

module.exports = class ErrorModel {
    constructor(message, statusCode = statusCode.INTERNAL_SERVER_ERROR, type = '') {
        this.statusCode = statusCode
        this.type = type
        this.message = message
    }
}