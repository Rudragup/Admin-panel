const image_uploader=async (req,res)=>{
  try {
   
    res.status(200).json({
      message: 'File uploaded successfully',
      file: req.file,
    });
  } 
  catch (error) {
    res.status(500).json({
      message: 'File upload failed',
      error,
    });
  }
    }
module.exports=image_uploader;