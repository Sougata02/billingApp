const { json } = require('express');
const Customer = require('../models/Customer');
exports.getCurrentUser = async(req,res)=>{
    try{
        let currentUser = await req.session.us;
        let user = await Customer.findById(currentUser);
        req.session.id = undefined;
        res.status(200).json({
            success:true,
            response:user
        })
    }catch(e){
        res.status(201).json({
            success:false,
            m:e.message
        })
    }
}