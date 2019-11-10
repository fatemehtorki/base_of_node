"use strict"
require('module-alias/register')
const dotenv = require('dotenv')
dotenv.config()

require('@utils/asyncWrapper')
require('@database/mongoose')
require('@utils/common')