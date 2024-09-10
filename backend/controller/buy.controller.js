const Product=require('../Model/product.model');
const messageModel=require('../Model/message.model');


const jwt=require('jsonwebtoken');
const user=require('../Model/User');
const buy=async(req,res)=>{

try{
const {productId,quantity,token1}=req.body;

const product=await Product.findById(productId);
if(!product){
    return res.status(404).json({message:"product not found"})
}
const {image,name,price,token}=product;


product.quantity-=quantity;
await product.save();

const decoded =jwt.decode(token1);
console.log(decoded._id);
const us = await user.findById(decoded._id);
console.log(us);
console.log("hii");

const userid=us._id;

const userProduct=new Product({image,name,price,quantity,token,userid});
const message=`Total amount is ${price*quantity} and quantity is ${quantity}`

const Product_name=userProduct.name;
const username=us.name;


const message1=new messageModel({message,userid,Product_name,username});
await message1.save();

userProduct.name=name.concat('s');
const check=await Product.findOne({name:userProduct.name});
if(check){
   console.log(parseInt(check.quantity)+parseInt(quantity));
   let a=parseInt(check.quantity)+parseInt(quantity);
   check.quantity=a.toString();
    await check.save();
    return res.json({message:"product purchased successfully"})
}


await userProduct.save();

res.json({message:"product purchased successfully"})
}
catch(err){
    res.status(500).json({message:err.message})
}
}

module.exports=buy