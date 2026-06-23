const express = require("express")

const app = express()
const userRoutes = require("./routes/userRoutes")
app.use(express.json())
const connectDB = require("./config/db")

connectDB();
    
app.use("/api/v1/rrcollege/user",userRoutes)



app.listen(5000,()=>{
    console.log("server is listening at 5000")
})

