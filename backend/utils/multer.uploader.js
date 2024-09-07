const multer = require('multer');
const path=require('path');
let imagename;


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, path.join(__dirname,'../public/images'))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      imagename = file.fieldname + '-' + uniqueSuffix+'.'+file.originalname.split('.').pop()
      cb(null, file.fieldname + '-' + uniqueSuffix+'.'+file.originalname.split('.').pop())
      
    }
  })

  const upload = multer({storage})

  module.exports =upload;