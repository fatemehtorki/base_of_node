"use strict"
const mongoose = require('mongoose')
const validator = require('validator')
const _ = require('lodash')
let timestampPlugin = require('./plugins/timestamp')

let categoryShema=new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    userid:{
        // uuid type
        type:String,
        required:true,
    }
})

categoryShema.methods.toJson=function () {
    let category = this
    let categoryObject = category.toObject()

    return _.pick(categoryObject, ['_id', 'name', 'userid'])
}
categoryShema.plugin(timestampPlugin)


let Category= mongoose.model('Category',categoryShema)

module.exports=Category