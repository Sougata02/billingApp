const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    bills:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Bill'
        }
    ],
    payments:
    {
        type:String,
        default:"0"
    }
})
module.exports = mongoose.model('Customer',customerSchema);