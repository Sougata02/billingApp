const Product = require('../models/Product');
exports.getProduct = async(req,res)=>{
    try{
    let name = await req.params.name;
    name = name.toLowerCase();
    if(name==="all" || name==""){
        let allProduct = await Product.find({});
        res.status(200).json({
            success:true,
            response:allProduct
        })
    }else{
        const regex = new RegExp(name, 'i');
        let allProduct = await Product.find({productName:regex});
        res.status(200).json({
            success:true,
            response:allProduct
        })
    }
    }catch(e){
        res.status(201).json({
            success:false,
        })
    }
}