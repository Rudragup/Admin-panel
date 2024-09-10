const mongoose = require('mongoose');

const schema = mongoose.Schema({
    message:{
        type:String
    },
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
 Product_name:{
    type:String
 },
 username:{
    type:String
 }
},{timeStamps:true});

const message = mongoose.model('Message',schema);

module.exports = message;
