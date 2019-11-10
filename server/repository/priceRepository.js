const Price=require('@models/priceModel')
const ErrorModel = require('@error/error')

class PriceRepository {

    async findpriceByproid(productid){
        let price =await Price.findOne({
            productid
        })

        console.log('in'+price)
        return price
    }

    async create(data){
        console.log('repo'+data.userid+data.productid)
        let price=await this.findpriceByproid(data.productid)
        if(price){

            throw new ErrorModel('pricerecord  for this product exist', statusCode.CONFLICT)

        }

        price =new Price(data);
       
        return  await price.save()
        

    }

}
module.exports=function () {
    let repository = new PriceRepository();

    return repository
}