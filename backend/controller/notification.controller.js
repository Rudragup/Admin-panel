const message=require('../Model/message.model');

const notification=async (req,res)=>{

    const {userid}=req.body;
    const mes=await message.find({userid:{$ne:userid}})


    res.status(200).json({
        mes
    })
}

const deletion=async(req,res)=>{
    const {_id}=req.body;
    const mes=await message.findByIdAndDelete(_id);
    res.status(200).json({
            message:"Deleted"    
    })
}

module.exports={notification,deletion};