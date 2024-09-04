const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    
image:{
    required:true,
    type:String,
},
name:{
    required:true,
    type:String,
    unique:true
},
price:{
    required:true,
    type:Number,
},
quantity:{
    required:true,
    type:Number,
},
userid:{
    type:Schema.Types.ObjectId,
    ref:'users',
    default:null
}


},{timestamps:true})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;