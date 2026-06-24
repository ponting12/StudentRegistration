const mongoose = require("mongoose")

const connectDB = async ()=>{
    await mongoose.connect("mongodb://localhost:27017/collage").then(
        console.log("Database is  Connected successfully - ready for transactions !")
    )
}

module.exports = connectDB