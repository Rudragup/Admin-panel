const product=require("../Model/product.model");
const user=require("../Model/User");
const jwt=require("jsonwebtoken");
const add_product = async (req,res)=>{
try{
const {image,name,price,quantity,token}=req.body;

const check=await product.findOne({name});
if(check){
return res.json({
    message:"product already exist",
    success:false
})
}
const decoded =jwt.decode(token);
console.log(decoded._id);

const us = await user.findById(decoded._id);
console.log(us);

const userid=us._id;

const new_product=new product({image,name,price,quantity,token,userid});
await new_product.save();
res.json({
    message:"product added successfully",
    success:true
});

console.log(image,name,price,quantity,token);
}
catch(err){
    res.send(err);
    console.log(err);
}

}

const products=async(req,res)=>{
    try{
        const {userid}=req.body;
    const products=await product.find({userid});
    console.log(products);
    res.json({products});
    }
    catch(err){
        res.send(err);
        console.log(err);
    }
}

module.exports={add_product,products};