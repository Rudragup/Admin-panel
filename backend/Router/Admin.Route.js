const express=require('express');

const {details,Apporve}=require('../controller/Admin.controller');

const router = express.Router();

router.get("/detail", details);
router.post("/apporve", Apporve);

module.exports= router;