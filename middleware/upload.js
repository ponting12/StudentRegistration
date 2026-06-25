const multer  = require('multer')
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require('dotenv').config();
const cloudinary = require('cloudinary').v2;


//bhai jan this is cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

//bhai ye hai storage config

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'rr_uploads', // Destination folder name in Cloudinary
    allowed_formats: ['jpg', 'png', 'jpeg'], // Restrict file types
    transformation: [{ width: 500, height: 500, crop: 'limit' }] // Optional resizing
  },
});

/*
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './upload')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)+".jpg"
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})*/


const upload = multer({storage:storage})

module.exports = upload