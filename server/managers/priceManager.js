
"use strict"

const repo = require('@repository')
const Product = require('@models/productModel')
const _ = require('lodash')

class PriceManager {

    async createprice(data) {
        
        let price = await repo.price.create(data)
        let product =  await Product.findById(price.productid)
        let obj= _.merge(price.toObject(),product.toObject());

        return  obj
        
    }

   

}

module.exports = function () {
    let manager = new PriceManager();

    return manager
}