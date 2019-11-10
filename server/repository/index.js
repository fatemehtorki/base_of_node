"use strict"
module.exports = {
    "user": require("./UserRepository")(),
    "product": require("./productRepository")(),
    "category": require("./categoryRepository")(),
    "price": require("./priceRepository")(),

}