const mongoose = require('mongoose');

const smallBillSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    },
    rate:{
        type:String,
        required:true
    },
    total:{
        type:String,
        required:true
    },
    bill:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Bill',
        // required:true
    },
})
module.exports = mongoose.model('SmallBill',smallBillSchema);