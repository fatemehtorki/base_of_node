"use strict"

const repo = require('@repository')

class UserManager {

    async createUser(data) {

        let user = await repo.user.create(data)
        return user
    }

    async login(data) {

        let user = await repo.user.findUserByUsername(data.username)

        return user
    }

}

module.exports = function () {
    let manager = new UserManager();

    return manager
}