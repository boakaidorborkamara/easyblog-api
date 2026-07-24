const bcrypt = require('bcrypt');
const saltRounds = 10;


const hashPassword = async (myPlaintextPassword)=>{
    try{
        let hash = await bcrypt.hash(myPlaintextPassword, saltRounds);
        return hash;
    }
    catch(err){
        throw err
    }
}


const verifyPassword = async (myPlaintextPassword, hashPassword)=>{
    try{
        const isMatch = await bcrypt.compare(password, hashPassword);
        return isMatch;
    }
    catch(err){
        throw err
    }
}

module.exports = {
    hashPassword,
    verifyPassword
}