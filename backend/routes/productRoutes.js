const express = require('express')
const Product = require('../models/productSchema')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const { errorHandler } = require('../middleware/errorMiddleware')


router.get('/', asyncHandler(async(req,res) => {
   const foundProducts = await Product.find({})
   
   res.json(foundProducts)
}))

router.get('/:id', asyncHandler(async(req,res) => {
    const product = await Product.findById(req.params.id) 

    if(product){
        res.json(product)
    }
    else{
        // res.status(404).json({ message: "Product not found "})
        // using custom error errorHandler, setting status is not compulsory default status 500
        res.status(404)
        throw new Error('Product not found')
    }
}))

module.exports = router
