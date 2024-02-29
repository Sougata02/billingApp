const mongoose = require('mongoose');
require('dotenv').config();
const dbConnect = ()=>{
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("Database Connected");
    }).catch((e)=>{
        console.log("Error occured while connecting to the database");
    })
}

module.exports = dbConnect;