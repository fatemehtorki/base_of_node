// 'use strict';

// const
//     // express = require('express'),
//     v1 = require('./v1')

// // let router = express.Router()

// exports.route = (app) => {
//     let router = app.Router()
//     let route = v1.setupRoutes(app)
//     console.log(route)
//     return router.use('/v1', route)
// }

'use strict';

const
    express = require('express'),
    v1 = require('./v1')

let router = express.Router()

router.use('/v1', v1)

module.exports = router