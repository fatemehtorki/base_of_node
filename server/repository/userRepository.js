"use strict"

const User = require('@models/userModel')
const ErrorModel = require('@error/error')

class UserRepository {


    async findUserByUsername(username) {

        let user =  await User.findOne({
            username
        })

        // if (!user) {
        //     throw new ErrorModel('user by this username dose not exist', statusCode.CONFLICT)
        // }

        return user
    }

    async create(data) {

        let user = await this.findUserByUsername(data.username)

        if (user) {
            throw new ErrorModel('user by this username exist', statusCode.CONFLICT)
        }

        user = new User(data)
        return await user.save()
    }

}

module.exports = function () {
    let repository = new UserRepository();

    return repository
}