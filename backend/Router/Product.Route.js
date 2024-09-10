const {add_product,products} = require('../controller/product.contoller');
const upload=require('../utils/multer.uploader')
const Inventory=require('../controller/Inventory_controller');
const buy= require('../controller/buy.controller');
const {notification,deletion}=require('../controller/notification.controller');

const Route=require('express').Router();

Route.post('/add_product',upload.single('file'),add_product);

Route.post('/details',products);


Route.post('/buy',Inventory);

Route.post('/purchase',buy);

Route.post('/message',notification)
Route.post('/delete',deletion)
module.exports=Route;