"use strict"

exports.mdl1 = async (req, res, next) => {

    req.user = {
        username: "sobhan nami"
    }
    next()
}

exports.mdl2 = async (req, res, next) => {

    req.hello = {
        username: "hello"
    }
    next()
}