exports.setUser = async(req,res)=>{
    try{
        let id = await req.params.id;
        req.session.us = id;
        res.json({
            success:true,
            response:req.session.us
        })
    }catch(e){
        res.json({
            success:false,
            m:e.message
        })
    }
}