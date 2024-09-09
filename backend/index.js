const express = require('express');
const bodyParser = require('body-parser');
const AuthRouter = require('./Router/AuthRouter.js');
const detailRouter=require('./Router/Admin.Route');
const productRouter=require('./Router/product.Route');
const cors = require('cors');
require('dotenv').config();
require('./Model/db.js');
require('./Model/product.model')
const app = express();

app.use(express.static("public"));
const PORT=process.env.PORT;

app.use(bodyParser.json());

app.use(cors());

app.use('/auth',AuthRouter);
app.use('/admin',detailRouter);
app.use('/product',productRouter);

app.listen(PORT, (req,res)=>{
console.log('listening on port '+PORT);
})