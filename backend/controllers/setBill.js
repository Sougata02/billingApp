const Product = require('../models/Product');
// BJZUU51W3496K92QXKZREGAS code for sms
const Bill = require('../models/Bill');
const SmallBill = require('../models/SmallBill');
exports.setBill = async(req,res)=>{
    try{
    const {name,quantity} = req.body;
    const pro = await Product.findOne({productName:name});
    if(!pro){
        return res.json({
            success:false
        })
    }
    let q = parseInt(quantity);
    let a = parseInt(pro.productQuantity);
    if(q>a){
        return res.json({
            success:false
        })
    }
    let left = a-q;
    let total = parseInt(q)*parseInt(pro.productPrice);
    let rate = pro.productPrice;
    let currBill = await req.session.currBill;
    let newsmbill = await SmallBill.create({name:name,quantity:quantity,rate:rate,total:total,bill:currBill});
    let updateBill = await Bill.findByIdAndUpdate(currBill,{$push:{smallbills:newsmbill._id}},{new:true}).populate('smallbills');
    let makeBill = await Bill.findById(currBill);
    let totalBill = total + parseInt(makeBill.total);
    let updateBill2 = await Bill.findByIdAndUpdate(currBill,{total:totalBill});
    let updateProduct = await Product.findByIdAndUpdate(pro._id,{productQuantity:left});
    res.json({
        success:true,
        m:updateBill
    })
    }catch(e){
        console.log(e);
    }
}