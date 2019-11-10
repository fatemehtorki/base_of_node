'use strict'

require('module-alias/register')
require('@utils/loader')
const server = require('./server')()

// print(process.env.NODE_ENV)
server.create()
server.start()