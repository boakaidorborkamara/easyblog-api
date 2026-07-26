const {success, failure} = require("../utils/response");
const logger = require("../utils/logger");

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

function auth(req, res, next){
    let authHeader = req.headers.authorization;
    console.log("auth header", authHeader);
    next();
}


module.exports = {
    errorHandler,
    notFound,
    loggerMiddlware,
    auth
}