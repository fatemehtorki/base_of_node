"use strict"

const ErrorModel = require('@error/error')


const errorLogger = async (err, req, res, next) => {
    if (err.message) {
        print(err.message)
    }
    
    if (err.stack) {
        let caller_line =err.stack.split("\n")[4]
        print(err.message)
        print(caller_line)
    }

    next(err)
}

const errorHandler = async (err, req, res, next) => {
    if (err instanceof ErrorModel) {
        return responseErrorHandler(err, res)
    }

    next(err)
}

const genericError = async (err, req, res, next) => {
    res.sendStatus(500)
    next()
}

const responseErrorHandler = async (err, res) => {

    let response = {
        status: "error",
        type: err.type,
        messages: err.message,
    }

    res.status(err.statusCode).send(response)

}


module.exports = async (app) => {
    app.use([
        errorLogger,
        errorHandler,
        genericError
    ])
}