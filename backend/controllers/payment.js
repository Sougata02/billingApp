const Payment = require('../models/Payment');
const Customer = require('../models/Customer');
const Bill = require('../models/Bill');

exports.payment = async(req,res)=>{
    try{
    const user = req.session.us;
    const bill = req.session.currBill;
    const {money} = req.body;
    let newPay = await Bill.findById(bill);
    let k = parseInt(money)+parseInt(newPay.payment);
    let updateBill = await Bill.findByIdAndUpdate(bill,{payment:k})
    let newUser = await Customer.findById(user);
    k = parseInt(money)+parseInt(newUser.payments);
    let updateUser = await Customer.findByIdAndUpdate(user,{payments:k})
    res.json({
        success:true
    })
    }catch(e){
        res.json({
            success:false,
            m:e.message
        })
    }
}