const User = require("../modals/userModal")
const abhinav = require("bcrypt")

const validatePassword = async (upass,user)=>{
    //upass - user entered password
    //user - user object with db data
    return await abhinav.compare(upass,user.password) 
    //this function will return true or false
}


const register = async (req,res)=>{
      
      try{
          const {username,email,npassword} = req.body
          const password = await abhinav.hash(npassword,12)
          //console.log(npassword,password)
          await User.create(
            {username,
                email,
                password}
        )

          res.status(201).json({message:"User Registered Successfully"})
      }catch(err){
           console.error("User creation error: ", err) 
      }



}

const getUsers = (req,res)=>{
    
}


const loginUser = async (req,res)=>{
    const {email,password} = req.body
    const user = await User.findOne({email})
    if(!user){
        console.log(user)
        return res.status(404).json({message:"User not found"})
    }
    else{
        const isPass = await validatePassword(password,user)
        if(isPass){
            res.json({message:"Credentials Verified this is your login token "})
        }
        else{
            res.status(401).json({message:"Arey you gave wrong credentials"})
        }
    }
    console.log(user)
    res.send("Processed")
    
}

module.exports = {register,loginUser,getUsers}