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
// Access to fetch at 'https://billing-app-iota.vercel.app/getproduct/all' from origin 'https://billing-app-front.vercel.app' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
app.use(cors(
    {
        // origin:'https://billing-app-front.vercel.app',
        origin:[*],
        methods:['POST','GET'],
        credentials:true
    }
    ))
app.use(express.json());
app.use(router);
app.listen(process.env.PORT_NO || 4000,()=>{
    console.log("Server Started!!");
})
dbConnect();
