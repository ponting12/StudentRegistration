require("dotenv").config()

const mongoose = require("mongoose")

const connectDB = async ()=>{
    await mongoose.connect(process.env.DB_CONNECTION).then(
        console.log("AbhiDB Connected successfully - ready for transactions !")
    )
}

module.exports = connectDB