"use strict"

let mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.set('useCreateIndex', true)
let database = process.env.DATABASE_URL
mongoose.connect(database, {
    useNewUrlParser: true
})
mongoose.set('useFindAndModify', false)