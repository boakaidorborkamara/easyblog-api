const User = require("../models/userModel");
const {generateAccessToken} = require("../utils/token");
const {success, failure} = require("../utils/response");
const {hashPassword, verifyPassword} = require("../helpers/password");

const signup = async(req, res, next)=>{
   try{
        
        // extract data from request body 
        let {first_name, last_name, username, password} = req.body;

        // create new user 
        let user = User({first_name, last_name, username, password:await hashPassword(password)});

        // save user to db 
        let result = await user.save();
       
        // send response 
        res.status(201).json(success(result, "Account created successfully!" ));

   }
   catch(err){
        next(err)
   }
}

const login = async(req, res, next)=>{
   try{
        let {username, password} = req.body;

        // check required values 
        if(!username || !password){
            res.status(400).json(failure(400, "username and password are required", "Missing required field!"));
        }

        // query user from db 
        let user = await User.findOne({username});
        
        // check if user exists 
        if(!user){
            return res.status(401).json(failure(401, "The credential you provided is invalid", "Invalid Crendentials"));
        }


        // check if password is correct 
        if(!await verifyPassword(password, user.password)){
            return res.status(401).json(failure(401, "The password you provided is incorrect.", "Wrong Password!"));
        }


        // create token 
        let token = generateAccessToken(user);
        
        res.status(200).json(success({user, token}, "Login Successful!"));
   }
   catch(err){
    next(err)
   }
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