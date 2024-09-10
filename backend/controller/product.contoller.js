const product=require("../Model/product.model");
const user=require("../Model/User");
const jwt=require("jsonwebtoken");



const add_product = async (req,res)=>{
try{
    console.log(req.body);
    console.log(req.file.path);


    // Your file path string
const filePath = req.file.path;

// Find the position of the last backslash
const lastBackslashIndex = filePath.lastIndexOf('\\');

// Slice the string to get everything after the last backslash
const fileName = filePath.substring(lastBackslashIndex + 1);




    const image=fileName;
const {name,price,quantity,token}=req.body;


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