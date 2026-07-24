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


module.exports = {
    errorHandler,
    notFound
}