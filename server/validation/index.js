"use strict"
module.exports = {
    "user": require("./UserValidation")(),
    "product": require("./productValidation")(),
    "category": require("./categoryValidation")(),
    "price": require("./priceValidation")()
}