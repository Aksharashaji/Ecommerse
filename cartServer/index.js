const express = require('express')

const cors = require('cors')

const dataService=require('./services/dataService')

const app =express()

app.use(express.json())

app.use(cors({
    origin:'http://localhost:4200'
}))

app.listen(3000,()=>{
    console.log('server strated at 3000');
})

// getALLProducts api
app.get('/all-products',(req,res)=>{
 console.log('inside getAllproduct function');
 dataService.getAllproduct()
 .then((result)=>{
    res.status(result.statusCode).json(result)
 })
})


// addtowishlist

app.post('/add-to-wishlist',(req,res)=>{
    console.log('inside add-to-wishlist function');
    console.log(req.body);
    dataService.addToWishList(req.body.id,req.body.title,req.body.price,req.body.description,req.body.image)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

// getowishlist

app.get('/get-wishlist',(req,res)=>{
    console.log('inside getowishlist function');
    console.log(req.body);
    dataService.getWishlist()
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

// delete-item-wishlist
app.delete('/delete-item-wishlist/:id',(req,res)=>{
    console.log('inside delete-item-wishlist function ');
    dataService.deleteitemWlist(req.params.id)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

