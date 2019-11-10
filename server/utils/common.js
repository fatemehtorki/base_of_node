"use strict"
require('module-alias/register')
const uuid = require('node-unique-id-generator')
const util = require('util')


global.generateUUID = () => {
    return uuid.generateUniqueId(`${uuid.generateGUID(`${Date.now()}`)}`)
}

// global.GenerateToken = async (code) => {

//     let _refreshToken = await refreshTokenService.getByTokenCode(code)

//     let _token = await tokenService.create(_refreshToken)

//     return _token

// }


global.print = async (obj) => {
    util.log(obj)
}