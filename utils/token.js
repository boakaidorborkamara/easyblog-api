const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require("../utils/config");



const generateAccessToken = (user)=>{
    let token = jwt.sign({ user: user.id }, JWT_SECRET, {expiresIn:"7d"});
    return token;
}

const generateRefreshToken = (user)=>{
    let token = jwt.sign({ user: user.id }, JWT_SECRET, {expiresIn:"30d"});
    return token;
}

const decodeToken = async(jwt_token)=>{
   try{
        console.log("decoding token");
        let decoded = await jwt.verify(jwt_token, JWT_SECRET);
        console.log("token decoded:", decoded);
        return decoded;
   }
   catch(err){
    throw err
   }
}


module.exports = {
    generateAccessToken,
    generateRefreshToken,
    decodeToken
}