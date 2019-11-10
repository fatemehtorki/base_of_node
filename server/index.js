'use strict'
require('module-alias/register')

const
    express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    expressValidator = require('express-validator'),
    helmet = require('helmet'),
    ErrorHandlingMiddleware = require('@mdl/errorHandling')


module.exports = () => {


    let app = express(),
        create,
        start

    create = () => {
        const routes = require('@route/route')

        // Server settings
        app.set('env', process.env.env)
        app.set('port', process.env.PORT)
        app.set('hostname', process.env.HOSTNAME)

       // Parse URL-encoded bodies (as sent by HTML forms)
        app.use(express.urlencoded({extended: false})); 
        // Parse JSON bodies (as sent by API clients)
        app.use(express.json());
        
        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({
        extended: true
        }))

        app.use(expressValidator())
        app.use(cors())
        app.use(helmet())

        // Set up routes
        routes.init(app)

        // app.use(internalErrorHandlers)
        //error middleware must be last middleware
        ErrorHandlingMiddleware(app)

    }


    start = () => {

        const
            hostname = app.get('hostname'),
            port = process.env.PORT || app.get('port')

        app.listen(port, () => {
            console.log('Express server listening on - http://' + hostname + ':' + port)
        })


    }

    return {
        create: create,
        start: start,
    }

}