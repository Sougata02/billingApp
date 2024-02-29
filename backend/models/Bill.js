const mongoose = require('mongoose');

const billSchema = mongoose.Schema({
    date:{
        type:String,
        required:true
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Customer'
    },
    smallbills:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'SmallBill'
        }
    ],
    payment:{
        type:String,
        default:"0"
    },
    total:{
        type:String,
        default:"0"
    }
})
module.exports = mongoose.model('Bill',billSchema);