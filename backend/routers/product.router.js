const express = require('express');
const router = express.Router();
const {productModel} = require('../models/productModel')
const mongoose = require('mongoose');


router.get('/' , async (req, res) => {
    const products = await productModel.find({})
    res.json(products)
})
router.get('/:id' , async (req, res) => {
    const product = await  productModel.findById({_id: req.params.id })
    console.log(product)
    res.json(product)
    
})

module.exports = router;