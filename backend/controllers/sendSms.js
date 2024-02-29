
const accountSid = 'AC3bc722c0883b40c7dd5be8ff266b2468';
const authToken = 'a583364b9ce8815716eb28eb0394d96f';
const client = require('twilio')(accountSid, authToken);
exports.sendSms = async(req,res)=>{
  client.messages
  .create({
     body: `Hello ${req.body.name}, 
     You have a due amount of ${req.body.due}
     From: Sen Fertilizer`,
     from: '+12622610529',
     to: `${req.body.no}`
   })
  .then(()=>{
    res.json({
      success:true
    })
  })
  .catch((e)=>{
    console.log(e.message);
    res.json({
      success:false
    })
  });
}