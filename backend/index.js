const express = require('express');
const session = require('express-session');
const dbConnect = require('./config/dbConnect');
const cors = require('cors');
const router = require('./routes/router');
require('dotenv').config();

const app = express();

// Configure session
app.use(session({
    secret: 'nimai'
}));

// Enable CORS middleware
app.use(cors({
    origin: 'https://billing-app-front.vercel.app', // Change this to your front-end URL
    methods: ['POST', 'GET'],
    credentials: true
}));

app.use(express.json());
app.use(router);
app.get('/',(req,res)=>{
    res.send("Hello");
})
app.post('/addcustomer',(req,res)=>{
    const {name,address,phone} = await req.body;
        console.log(name,address,phone);
        let k = name.toLowerCase();
        let newCustomer = await Customer.create({name:k,address,phone});
        res.status(200).json({
            success:true,
            message:"Customer has been added!!",
            response:newCustomer
        })
})
// Start server
app.listen(process.env.PORT_NO || 4000, () => {
    console.log("Server Started!!");
});

// Connect to database
dbConnect();
