const productmodel=require('../Model/product.model');

const Inventory=async (req,res)=>{
    const {userid}=req.body;
     console.log("id "+userid);
const response=await productmodel.find({userid:{$ne:userid}});
res.send(response);
}

module.exports=Inventory;