const jwt=require('jsonwebtoken');
const user=require('../Model/User');

const tokenvaldition= async (req,res,next)=>{
const token=req.body.token1;

if(!token){
    return res.status(401).json({message:"unauthorized access"})
}
const token_data=jwt.decode(token);

if(!token_data){
    return res.status(401).json({message:"unauthorized token access"})
}

const _id=token_data._id;

const user_data=await user.findById(_id);

if(!user_data){
    return res.status(401).json({message:"unauthorized access"})
}
next();
}


const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    console.log(authHeader)
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401).json({message:"token not found "}); // Unauthorized

    jwt.verify(token,"Secert-123", (err, user) => {
        if (err) return res.sendStatus(403); // Forbidden
        req.user = user;
        next();
    });
};



module.exports={tokenvaldition,authenticateToken};