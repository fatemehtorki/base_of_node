"use strict"

const Controller = require("./Controller")
const middlewares = require('@mdl')
const manager = require('@manager/userManager')()
const _ = require('lodash')

class UserController extends Controller {

    constructor() {
        super('/user')
    }

    async createUser(req, res) {


        let body = _.pick(req.body, ['email', 'username', 'password'])

        let user = await manager.createUser(body)

        this.response(res, {
            user,
        }, 'user created', undefined, 'ok', 201)

    }

    async login(req, res) {
        
        let body = _.pick(req.body, ['username', 'password'])
        let user = await manager.login(body)
        print(user)
        this.response(res, {
            user,
        }, 'user', undefined, 'ok', 200)

    }
}

module.exports = function () {
    let controller = new UserController();
    let validator = middlewares.validator

    controller.addAction({
            'path': '',
            'method': 'POST',
            'summary': 'Return User Object',
            "data": "Object",
            'responseClass': 'User',
            'nickname': 'createUser'
        },
        [validator('user', 'default')],
        controller.createUser)

    controller.addAction({
            'path': '/login',
            'method': 'POST',
            'summary': 'Return User Object',
            "data": "Object",
            'responseClass': 'User',
            'nickname': 'login'
        },
        [validator('user', 'login')],
        controller.login)


    return controller
}