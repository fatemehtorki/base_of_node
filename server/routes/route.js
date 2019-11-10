'use strict'

const apiRoute = require('./apis/api')

exports.init = (app) => {


    app.get('*', (req, res, next) => {

        console.log('')
        console.log('<-------------------------- GET Request -------------------------->')
        console.log(' GET request was made to: ' + req.originalUrl + " -> " + new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''))
        console.dir("   request params: " + JSON.stringify(req.params))
        console.log('')
        console.log('')

        return next()
    })

    app.post('*', (req, res, next) => {

        console.log('')
        console.log('<-------------------------- POST Request -------------------------->')
        console.log(' POST request was made to: ' + req.originalUrl + " -> " + new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''))
        console.dir("   request body: " + JSON.stringify(req.body))
        console.log('')
        console.log('')

        return next()
    })

    app.patch('*', (req, res, next) => {

        console.log('')
        console.log('<-------------------------- PATCH Request -------------------------->')
        console.log(' PATCH request was made to: ' + req.originalUrl + " -> " + new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''))
        console.dir("   request params: " + JSON.stringify(req.params))
        console.log('')
        console.log('')

        return next()
    })

    app.delete('*', (req, res, next) => {

        console.log('')
        console.log('<-------------------------- DELETE Request -------------------------->')
        console.log(' DELETE request was made to: ' + req.originalUrl + " -> " + new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''))
        console.dir("   request params: " + JSON.stringify(req.params))
        console.log('')
        console.log('')

        return next()
    })

// add here every routs folder such ass website route , outputapis & ...
    app.use('/api', apiRoute)

}
