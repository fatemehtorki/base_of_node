
"use strict"

const repo = require('@repository')

class ProductManager {

    async createProduct(data) {
        

        let product = await repo.product.create(data)
       
        return product
    }

   

}

module.exports = function () {
    let manager = new ProductManager();

    return manager
}