const mongoose = require("mongoose");
const logger = require("./logger");
const MONGO_URL = process.env.MONGO_URL;
const JWT_SECRET = process.env.JWT_SECRET;


// connect to db 
const DB_CONFIG = async()=>{
    try {
        await mongoose.connect(MONGO_URL);
        logger.info("Database connected successfully!");
        
    } catch (error) {
        throw error
    }
}



module.exports = {
    JWT_SECRET,
    DB_CONFIG
}

