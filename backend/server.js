const express = require('express')
const products = require('./data/products')

const app = express()

app.get('/', (req,res)=>{
    res.send('API is running')
})

app.get('/api/products', (req,res) => {
    res.json(products)
})

app.get('/api/products/:id', (req,res) => {
    const id = req.params.id;
    // products.forEach(p => {
    //     if(p._id == id){
    //         return res.json(p)
    //     }
    // });
    products.find((p) => p._id == id && res.json(p))
})

const PORT = process.env.PORT || 5000

app.listen(5000, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))