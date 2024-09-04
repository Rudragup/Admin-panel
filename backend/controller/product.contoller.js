const product=require("../Model/product.model");

const add_product = async (req,res)=>{
try{const {image,name,price,quantity}=req.body;

const check=await product.findOne({name});
if(check){
    res.send("product already exist");
}

const new_product=new product({image,name,price,quantity});
await new_product.save();
res.json("product added");

console.log(image,name,price,quantity);
}
catch(err){
    res.send(err);
    console.log(err);
}
}

const products=async(req,res)=>{
    try{
    const products=await product.find();
    res.send(products);
    }
    catch(err){
        res.send(err);
        console.log(err);
    }
}

module.exports={add_product,products};