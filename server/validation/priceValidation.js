const Joi = require("Joi")

class PriceValidation{

    default () {
        return Joi.object().keys({
            userid: Joi.string().required(),
            pricebuy: Joi.string(),
            pricesale: Joi.string(),
            productid:Joi.string(),
            

        })
    }
}

module.exports=function () {
    
    let validation= new PriceValidation();
    return validation
}
