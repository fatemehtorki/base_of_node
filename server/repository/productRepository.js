"use strict"

const Product = require('@models/productModel')
const ErrorModel = require('@error/error')
// const multer = require('multer');

// let storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, 'server/public/images/uploads')
//     },
//     filename: (req, file, cb) => {
//       cb(null, file.fieldname + '-' + Date.now())
//     }
// });
// let upload = multer({storage: storage});

class ProductRepository {

    
    async findproductBybarcode(barcode) {

        let product =  await Product.findOne({
            barcode
        })

        // if (!user) {
        //     throw new ErrorModel('user by this username dose not exist', statusCode.CONFLICT)
        // }

        return product
    }

    async create(data) {
        
        // upload.single('picture')
        let product = await this.findproductBybarcode(data.barcode)

        if (product) {
            throw new ErrorModel('product by this barcode exist', statusCode.CONFLICT)
        }

        product = new Product(data)
        return await product.save()
    }

}

module.exports = function () {
    let repository = new ProductRepository();

    return repository
}