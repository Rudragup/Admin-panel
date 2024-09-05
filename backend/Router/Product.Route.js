const {add_product,products} = require('../controller/product.contoller');
const upload=require('../utils/multer.uploader')


const Route=require('express').Router();

Route.post('/add_product',upload.single('file'),add_product);

Route.get('/details',products);
module.exports=Route;