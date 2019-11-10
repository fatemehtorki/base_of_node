"use strict"
const mongoose = require('mongoose')
const validator = require('validator')
const _ = require('lodash')
let timestampPlugin = require('./plugins/timestamp')

let priceShema= new mongoose.Schema({

    userid:{
        type:String,
        required:true

    },
    productid:{
        type:String,
        required:true,
        unique:true

    },
    pricebuy:{
        type:String,

    },
    pricesale:{
        type:String,
    }


})

priceShema.methods.findproductById =async function() {

    let price =this
    let priceObject=price.toObject()
    

    return _.pick(priceObject,['userid','pricebuy','pricesale'])

  };

priceShema.plugin(timestampPlugin)


let Price = mongoose.model('Price', priceShema)

module.exports = Price