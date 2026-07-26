const {success, failure} = require("../utils/response");
const logger = require("../utils/logger");
const {decodeToken} = require("./token");

function errorHandler(err, req, res, next){
    logger.error("error", err);

    if(err.name === "ValidationError"){
        return res.status(400).json(failure(400, err, err.message));
    }

    return res.status(500).json({msg:"Server encounter an error"});
}


function notFound(req, res){
    res.status(404).json(failure(404, null, "Route doesn't exist."));
}


function loggerMiddlware(req, res, next){
    logger.info("Route", req.path);
    logger.info("Method", req.method);
    logger.info("Body", req.body);

    next();
}

async function auth(req, res, next){
    try{
        console.log("authentication middleware running....")
        let authHeader = req.headers.authorization;

        // check if authorization header was provided 
        if(!authHeader){
            return res.status(403).json(failure(403, "The request is missing authorization header.", "Authorization header missing."))
        }
        else if(authHeader.split(" ")[0] !== "Bearer"){
            console.log("bearer missing...")
            return res.status(403).json(failure(403, "The request is missing bearer token.", "Bearer token missing."))
        }

        // extract bearer token from authorization header 
        let token = authHeader.split(" ")[1];

        // decode token
        let decoded = await decodeToken(token);

        req.user = {id:decoded.user}

        next();
    }
    catch(err){
        next(err)
    }
}


module.exports = {
    errorHandler,
    notFound,
    loggerMiddlware,
    auth
}