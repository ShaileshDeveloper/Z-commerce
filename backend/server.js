const express = require('express');
const products = require('./products')
const cors = require('cors')
const dbconnection = require('./dbconnection')
const dotenv= require('dotenv')
const productRouter = require('./routers/product.router')
dotenv.config()
const app = express();
app.use(cors())
dbconnection()

app.get('/' , (req, res) => {
    res.send("products")
})

app.use('/products' , productRouter)


app.listen(5000 , (req, res) => {
    console.log('express is workingg')
})