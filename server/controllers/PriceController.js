"use strict"

const Controller = require("./Controller")
const middlewares = require('@mdl')
const manager = require('@manager/priceManager')()
const _ = require('lodash')

class PriceController extends Controller {

    constructor() {
        super('/price')
    }

    async createPrice(req, res) {
        // console.log('start+'+req.body)
        let body = _.pick(req.body, ['userid','productid','pricebuy','pricesale'])
        // console.log('controller'+body.userid+body.productid)
        let price = await manager.createprice(body)
      
        this.response(res, {
            productinfo:price,
        }, 'price created', undefined, 'ok', 201)

    }

    
}

module.exports = function () {
    let controller = new PriceController();
    let validator = middlewares.validator

    controller.addAction({
            'path': '',
            'method': 'POST',
            'summary': 'Return Price Object',
            "data": "Object",
            'responseClass': 'Price',
            'nickname': 'createPrice'
        },
        [validator('price', 'default')],
        controller.createPrice)

  
    return controller
}