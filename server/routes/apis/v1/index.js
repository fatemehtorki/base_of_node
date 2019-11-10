'use strict'

require('module-alias/register')

const controllers = require('@controller')
const express = require('express')

let router = express.Router()

for (let controller in controllers) {
    let cont = controllers[controller]()
    router = cont.setUpActions()
}


module.exports = router