"use strict"
const mongoose = require('mongoose')
const validator = require('validator')
const _ = require('lodash')
// const root = 'https://s3.amazonaws.com/mybucket';
let timestampPlugin = require('./plugins/timestamp')


let userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        minlength: 1,
        unique: true,
        trim: true,
        validate: validator.isEmail,
        message: '{value} is not a valid email'
    },

    username: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        require: true,
        minlength: 6,
    },
    
  
    // picture: {
    //     type: String,
    //     get: v => `${root}${v}`
    //   }

})

//override
userSchema.methods.toJSON = function () {
    let user = this
    let userObject = user.toObject()

    return _.pick(userObject, ['_id', 'username', 'email'])
}
userSchema.plugin(timestampPlugin)
// userSchema.methods.getInitials = function() {
//   return this.firstName[0] + this.lastName[0]
// }



let User = mongoose.model('User', userSchema)

module.exports = User