const multer = require('multer');
const path=require('path');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, path.join(__dirname,'../public/images'))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix+'.'+file.originalname.split('.').pop())
    }
  })

  const upload = multer({storage})

  const image_uploader= (req, res, next) => {
    const {image} = req.file;
    if(!image) {
        return res.status(400).json({
            message: "No file uploaded"
        })
    }
const data=upload.single('image')
console.log(image,data);
        next()
    }

module.exports = image_uploader