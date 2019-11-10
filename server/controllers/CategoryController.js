"use strict"

const Controller = require("./Controller")
const middlewares = require('@mdl')
const manager = require('@manager/categoryManager')()
const _ = require('lodash')

class CategoryController extends Controller {

    constructor() {
        super('/category')
    }

    async createCat(req, res) {
        
        let body = _.pick(req.body, ['catname','userid'])
        let cat = await manager.createCategory(body)
      
        this.response(res, {
            catinfo:cat,
        }, 'cat created', undefined, 'ok', 201)

    }

    
}

module.exports = function () {
    let controller = new CategoryController();
    let validator = middlewares.validator

    controller.addAction({
            'path': '',
            'method': 'POST',
            'summary': 'Return cat Object',
            "data": "Object",
            'responseClass': 'cat',
            'nickname': 'createPrice'
        },
        [validator('category', 'default')],
        controller.createCat)

  
    return controller
}