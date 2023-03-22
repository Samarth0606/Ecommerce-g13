const mongoose = require('mongoose');

let productSchema = new mongoose.Schema({
    name: {
        type:String,
        trim:true,
        required:true
    },
    img: {
        type:String,
        trim: true,
        default:'/images/dummy.jpg'
    },
    price:{
        type:Number,
        min: 0,
        required:true
    },
    desc:{
        type:String,
        trim:true
    },
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Review'
        }
    ]
})


productSchema.post('findOneAndDelete' , function(){
    
})


let Product = mongoose.model('Product' , productSchema);
module.exports = Product;
