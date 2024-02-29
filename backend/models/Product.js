const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    productQuantity:{
        type:String,
        required:true
    },
    productPrice:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Product',productSchema);