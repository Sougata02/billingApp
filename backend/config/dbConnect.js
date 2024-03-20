const mongoose = require('mongoose');
require('dotenv').config();
const dbConnect = ()=>{
    mongoose.connect('mongodb+srv://sougatabhowmick62:Soug1122@@@cluster0.cggsngv.mongodb.net/',{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("Database Connected");
    }).catch((e)=>{
        console.log("Error occured while connecting to the database");
    })
}

module.exports = dbConnect;
