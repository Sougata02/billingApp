const Bill = require("../models/Bill");
const Customer = require("../models/Customer");
const SmallBill = require("../models/SmallBill");
exports.setTodaysBill = async (req, res) => {
  try {
    const id = await req.session.us;
    const date = new Date();
    let d = date.toLocaleDateString();
    const newBill = await Bill.findOne({ date: d, customer: id });
    if (newBill) {
      req.session.currBill = newBill._id;
      return res.json({
        success: true,
        m:newBill
      });
    }
    let getBill = await Bill.find({customer:id});
    let currBill = req.session.currBill;
    console.log(currBill);
    let generateBill;
    if(getBill.length>0){
      let arr = getBill[getBill.length-1];
      let prevDue = parseInt(arr.total)-parseInt(arr.payment);
      generateBill = await Bill.create({ date: d, customer: id });
      let newsmbill = await SmallBill.create({name:"Previous Due",quantity:"--",rate:"--",total:prevDue,bill:generateBill});
      let updateBill = await Bill.findByIdAndUpdate(generateBill._id,{$push:{smallbills:newsmbill._id}},{new:true}).populate('smallbills');
      updateBill = await Bill.findByIdAndUpdate(generateBill._id,{total:newsmbill.total});
    }else{
      generateBill = await Bill.create({ date: d, customer: id });
      let newsmbill = await SmallBill.create({name:"Previous Due",quantity:"--",rate:"--",total:"0",bill:generateBill});
      let updateBill = await Bill.findByIdAndUpdate(generateBill._id,{$push:{smallbills:newsmbill._id}},{new:true}).populate('smallbills');
    }
    let updateCustomer = await Customer.findByIdAndUpdate(id,{$push:{bills:generateBill._id}},{new:true}).populate('bills');
    req.session.currBill = generateBill._id;
    return res.json({
      success: true
    });
  } catch (e) {
    return res.json({
      success: false,
      m: e.message,
    });
  }
};
