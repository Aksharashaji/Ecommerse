const db=require('./db')

// getAllproducts function

const getAllproduct=()=>{
 return db.Product.find()
 .then((data)=>{
    if(data){
        return{
            statusCode:200,
            result:data

        }
    }
    else{
        return{
            statusCode:404,
            message:'failed to fetch the data from database'

        } 
    }
 })
}


// add to wishlist
const addToWishList=(id,title,price,description,image)=>{
   return db.Wishlist.findOne({
        id
    }).then((result)=>{
    if(result){
        return{
            statusCode:404,
            message:'product already in your wishlist'
        };
    }
    else{
        const newProduct=new db.Wishlist({
            id,
        title,
    price,
    description,
    image
        });
        newProduct.save()
        return{
            statusCode:200,
            message:'product added succesfully in your wishlist'

        }
    }
    })

}

const getWishlist=()=>{
    return db.Wishlist.find()
 .then((data)=>{
    if(data){
        return{
            statusCode:200,
            result:data

        };
    }
    else{
        return{
            statusCode:404,
            message:'your wishlist is empty'

        } 
    }
 });

}

// deleteitemwlist
const deleteitemWlist=(id)=>{
    return db.Wishlist.deleteOne({
        id
    }).then(
        (data)=>{
            if(data){
                // return{
                //     statusCode:200,
                //     message:'product removed from  your wishlist'
        
                // };
                return db.Wishlist.find()
                .then((data)=>{
                   if(data){
                       return{
                           statusCode:200,
                           wishlist:data,
                           message:'product removed succesfully from yor wishlist'

                    };
                   }
                   else{
                       return{
                           statusCode:404,
                           message:'your wishlist is empty'
               
                       } 
                   }
                });
            }
            else{
                return{
                    statusCode:404,
                    message:'product not available'
        
                }
            }
        }
    )
}

module.exports={
    getAllproduct,
    addToWishList,
    getWishlist,
 deleteitemWlist

}