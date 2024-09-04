const users=require( '../Model/User');

const details=async (req,res)=>{
    try{
      const list=await users.find();
      res.status(200).json(list);
    }
    catch(err){
        res.status(500).json("Error"+err);
        console.log(err);
    }
} 

const Apporve=async (req,res)=>{
  try{
    const {email}=req.body;
    const resp= await users.findOne({"email":email});
    if(resp.approved==false){
    await users.updateOne({"email":email},{$set:{"approved":true}});
    }
    else{
      await users.updateOne({"email":email},{$set:{"approved":false}});
    }
    console.log(resp);
   

    res.status(200).json("approvation done");  
}
catch(err){
  res.status(500).json(err);
}
}
module.exports={details,Apporve}