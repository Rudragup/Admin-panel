const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    
image:{
    type:String,
    required:true,
},
name:{
    required:true,
    type:String,
    unique:false
},
price:{
    required:true,
    type:Number,
},
quantity:{
    required:true,
    type:Number,
},
token:{
    type:String
},
userid:{
    type:Schema.Types.ObjectId,
    ref:'users',
    default:null
}


},{timestamps:true})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;