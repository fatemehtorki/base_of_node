"use strict"

const Controller = require("./Controller")
const middlewares = require('@mdl')
const manager = require('@manager/productManager')()
const upload=require('./UploadController')
const _ = require('lodash')

 


class ProductController extends Controller {

    constructor() {
        super('/product')
    }
   
    async createProduct(req,res) {

        
        let body = _.pick(req.body, ['barcode', 'title','category','producer','picture'])

        let product = await manager.createProduct(body)

        this.response(res, {
            product,
        }, 'product created', undefined, 'ok', 201)

    }

    
}

module.exports = function () {
    let controller = new ProductController();
    let validator = middlewares.validator

    controller.addAction({
            'path': '',
            'method': 'POST',
            'summary': 'Return product Object',
            "data": "Object",
            'responseClass': 'Product',
            'nickname': 'createProduct'
        },
        [upload.checkMultipart,upload.upload.single('picture'),validator('product', 'default')],
        controller.createProduct)

    return controller
}