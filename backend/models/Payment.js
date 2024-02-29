const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema({
    date:{
        type:String,
        required:true
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Customer'
    },
    bill:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Bill'
    },
})
module.exports = mongoose.model('Payment',paymentSchema);