const express = require('express');
const session = require('express-session');
const dbConnect = require('./config/dbConnect');
const cors = require('cors');
const router = require('./routes/router');
require('dotenv').config();

const app = express();
app.use(session({
    secret: 'nimai'
}));
app.use(cors(
    {
        // origin:'https://billing-app-front.vercel.app',
        origin:["*"],
        methods:['POST','GET'],
        credentials:true
    }
    ))
app.use(express.json());
app.use(router);
app.listen(process.env.PORT_NO || 4000,()=>{
    console.log("Server Started!!");
})
app.get('/',(req,res)=>{
    res.send("HEllo!!");
})
dbConnect();
