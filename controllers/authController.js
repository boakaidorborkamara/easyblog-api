const User = require("../models/userModel");
const {hashPassword} = require("../helpers/password");

const signup = async(req, res, next)=>{
   try{
        
        // extract data from request body 
        let {first_name, last_name, username, password} = req.body;

        // create new user 
        let user = User({first_name, last_name, username, password:await hashPassword(password)});

        // save user to db 
        let result = await user.save();

        res.status(201).json({status:"successful", message:"Account created successfully!", data:result});

   }
   catch(err){
        next(err)
   }
}

const login = async(req, res, next)=>{
    res.send("logging in");
}

const logout = async(req, res, next)=>{
    res.send("logging out");
}

const getProfile = async(req, res, next)=>{
    res.send("getting profile");
}


module.exports = {
    signup,
    login,
    logout,
    getProfile
}