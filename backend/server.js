const express = require('express');
const products = require('./products')
const cors = require('cors')
const dbconnection = require('./dbconnection')
const dotenv= require('dotenv')
dotenv.config()
const app = express();
app.use(cors())
dbconnection()

app.get('/' , (req, res) => {
    res.send("products")
})
app.get('/products' , (req, res) => {
    res.json(products)
})
app.get('/product/:id' , (req, res) => {
    const product = products.find((product) => product._id === req.params.id)
    res.json(product)
})

app.listen(5000 , (req, res) => {
    console.log('express is workingg')
})