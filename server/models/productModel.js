"use strict"
const mongoose = require('mongoose')
const validator = require('validator')
const _ = require('lodash')
let timestampPlugin = require('./plugins/timestamp')
 const root = 'localhost:3000/server/pic';
let productSchema = new mongoose.Schema({

    barcode: {
        type: String,
        required: true,
        // minlength: 1,
        unique: true,
        trim: true,
        // validate: validator.isEmail,
        // message: '{value} is not a valid email'
    },

    title: {
        type: String,
        required: true,
        
    },

    category :String,

    producer: String,

    picture: {
        type: String,
        get: v => `${root}${v}`
      },
    // category: [new Schema({
    //     post: String,
    //     two: Number,
    //     three : Number,
    //     four  : String,
    //     five : [new Schema({ 
    //         a: String,
    //         b: String,
    //         c: String,
    //         d: String,
    //         e: { type: Date, default: Date.now }, 
    //     }, {_id: false})]
    // }, {_id: false})],

    

})

//override
productSchema.methods.toJSON = function () {
    let product = this
    let productObject = product.toObject()

    return _.pick(productObject, ['_id', 'barcode', 'title','category','producer','picture'])
}
productSchema.plugin(timestampPlugin)

let Product = mongoose.model('Product', productSchema)

module.exports = Product