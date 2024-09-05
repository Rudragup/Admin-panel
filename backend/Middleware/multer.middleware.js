const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      return cb(null, "../public")
    },
    filename: function (req, file, cb) {
      return cb(null, `${Date.now()}_${file.originalname}`)
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