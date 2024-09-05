const {add_product,products} = require('../controller/product.contoller');
const  image_uploader=require('../controller/image.controller');
const upload=require('../utils/multer.uploader')


const Route=require('express').Router();

Route.post('/add_product',image_uploader,add_product);
Route.post('/image',upload.single('file'),image_uploader);
Route.get('/details',products);
module.exports=Route;