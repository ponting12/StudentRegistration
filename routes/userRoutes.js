const express = require("express")
const {register,loginUser,getUsers} = require("../controllers/userControllers")

const router = express.Router()

router.post("/register",register)

router.get("/getUsers",getUsers)

router.post("/login",loginUser)


module.exports = router

