const Customer = require('../models/Customer');
exports.addCustomer = async(req,res)=>{
    try{
        const {name,address,phone} = await req.body;
        console.log(name,address,phone);
        let k = name.toLowerCase();
        let newCustomer = await Customer.create({name:k,address,phone});
        res.status(200).json({
            success:true,
            message:"Customer has been added!!",
            response:newCustomer
        })
    }catch(e){
        res.send(e.message);
    }
}