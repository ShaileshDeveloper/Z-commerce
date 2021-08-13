const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema[{
    name:{
        type: String,
        required: true,
    },
    rating:{
        type: Number,
        required: true,
    },
    comment:{
        type: String,
        required: true,
    },
},{timestamps:true}
]

const productSchema = new mongoose.Schema({
    user:{
       type:mongoose.Types.Schema.ObjectId,
       ref:"User",
       required:true,
    },
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    brand:{
        type:String,
        required:true,
    },
    category: {
        type:String,
        required:true,
    },
    reviews:[reviewSchema],
    rating:{
        type:Number,
        required:true,
        default:0
    },
    numReviews:{
        type:Number,
        required:true,
        default:0
    },
    price:{
        type:Number,
        required:true,
    },
    countInStock:{
        type:Number,
        required:true,
    }
})

const postModel = new mongoose.Model('Product' , productSchema)
module.exports ={postModel , postSchema}