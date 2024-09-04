const {add_product,products} = require('../controller/product.contoller');
const Route=require('express').Router();

Route.post('/add_product',add_product);
Route.get('/details',products);
module.exports=Route;