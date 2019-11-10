
"use strict"

const repo = require('@repository')

class CategoryManager {

    async createCategory(data) {
    
        let category = await repo.category.create(data)
       
        return category
    }

}

module.exports = function () {
    let manager = new CategoryManager();

    return manager
}