const Bill = require('../models/Bill');
const Customer = require('../models/Customer');
const SmallBills = require('../models/SmallBill');
exports.getBills = async(req,res)=>{
    try{
        const user = req.session.us;
        const bill = req.session.currBill;
        const allBill = await Customer.findById(user).populate({
            path: 'bills',
            populate: {
                path: 'smallbills',
                model: 'SmallBill'
            }
        });
        res.json({
            success:true,
            response:allBill
        })
    }catch(e){
        res.json({
            success:false,
            m:e.message
        })
    }
}