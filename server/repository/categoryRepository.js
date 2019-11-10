const Category=require('@models/categoryModel')
const ErrorModel = require('@error/error')

class CategoryRepository {

    async findpriceBycatid(catname){

        let price =await Category.findById(catname)

        return price
    }

    async create(data){
       
        let price=await this.findpriceBycatid(data.catname)
        if(price){
            if (price.userid == data.userid) {

                throw new ErrorModel('categoryrecord  for this user exist', statusCode.CONFLICT)

            }else{

                cat =new Category(data);
    
                return  await cat.save()
            }
            
        }

        cat =new Category(data);
       
        return  await cat.save()
        

    }

}
module.exports=function () {
    let repository = new CategoryRepository();

    return repository
}