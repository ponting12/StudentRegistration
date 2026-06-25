const express = require("express")
const {register,loginUser,getProfile,uploadImg} = require("../controllers/userControllers")
const checkRequest = require("../middleware/authMiddleware")
const upload = require("../middleware/upload");

const router = express.Router()

router.post("/register",register)

//router.get("/getUsers",getUsers)

router.post("/uploadImage",upload.single("file"),uploadImg)

router.post("/login",loginUser)

router.get("/profile",checkRequest,getProfile)


module.exports = router

