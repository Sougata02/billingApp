const Product = require('../models/Product');
const twilio = require('twilio');
async function sendsms(){
    const client = new twilio("AC3bc722c0883b40c7dd5be8ff266b2468","a583364b9ce8815716eb28eb0394d96f");
    return client.messages.create({body:"Hlw",from:"+916295008924",to:"+918927312920"}).then((result) => {
        console.log("Sent!!");
    }).catch((err) => {
        console.log(err,"Ohho!!");
    });
}
exports.addProduct = async(req,res)=>{
    try{
        const {productName,productQuantity,productPrice} = await req.body;
        let k = productName.toLowerCase();
        let old = await Product.findOne({productName:k});
        if(old){
            const oldQuantity = parseInt(old.productQuantity)+parseInt(productQuantity);
            let newProduct = await Product.findByIdAndUpdate(old._id,{productName:k,productQuantity:oldQuantity,productPrice});
            sendsms();
            res.status(200).json({
                success:true,
                message:"Product has been updated!!"
            })
        }else{
            let newProduct = await Product.create({productName:k,productQuantity,productPrice});
            console.log(newProduct);
            sendsms();
            res.status(200).json({
                success:true,
                message:"Product has been updated!!"
            })
        }
    }catch(e){
        res.send(e.message);
    }
}