const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/onlineCart',()=>{
    console.log('momgodb connected succesfully');
})

const Product =mongoose.model('Product',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    category:String,
    image:String,
    rating:{
        rate:Number,
        count:Number
    }
})

const Wishlist =mongoose.model('Wishlist',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    image:String
    
})

module.exports={
    Product,
    Wishlist
}