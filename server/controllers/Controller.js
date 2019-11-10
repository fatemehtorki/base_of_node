"use strict"

const express = require('express')
const router = express.Router()

class Controller {

    constructor(baseRoute) {
        this.actions = []
        this.baseRoute = baseRoute
    }

    setUpActions() {
        this.actions.forEach(act => {
            let method = act['spec']['method']
            let path = this.baseRoute + act['spec']['path']
            let action = act['action']
            let mdl = act['mdl']

            switch (method.toLowerCase()) {
                case 'post':
                    router.post(path, mdl, asyncWrapper(action))

                    break
                case 'get':
                    router.get(path, mdl, asyncWrapper(action))
                    break
                case 'patch':
                    router.patch(path, mdl, asyncWrapper(action))

                    break
                case 'put':
                    router.put(path, mdl, asyncWrapper(action))

                    break
                case 'delete':
                    router.delete(path, mdl, asyncWrapper(action))

                    break
                default:
                    router.get(path, mdl, asyncWrapper(action))

                    break
            }
        })
        return router
    }

    addAction(spec, mdls, fn) {

        let middlewares = []
        mdls.forEach(mdl => {
            middlewares.push(asyncWrapper(mdl))
        })
        let newAct = {
            spec,
            mdl: middlewares,
            action: fn.bind(this)
        }
        this.actions.push(newAct)
    }


    response(res, data = {}, message = "", token = undefined, status = "ok", statusCode = 200) {

        if (typeof res === 'undefined') {
            return new Error('response object is not set')
        }

        let response = {}
        if (typeof token === 'undefined') {

            response = {
                status,
                message,
                data,
            }

            res.status(statusCode).send(response)
            return
        }

        response = {
            status,
            message,
            data,
            token
        }

        res.status(statusCode).send(response)

    }

}

module.exports = Controller