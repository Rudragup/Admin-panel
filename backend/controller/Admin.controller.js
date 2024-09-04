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
    const resp= await users.deleteOne({"email":email});

    res.status(200).json("data delted");
}
catch(err){
  res.status(500).json(err);
}
}
module.exports={details,Apporve}