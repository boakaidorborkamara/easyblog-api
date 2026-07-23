function errorHandler(err, req, res, next){
    res.status(500).json({msg:"Server encounter an error"});
}


function notFound(req, res){
    res.status(404).json({msg:"Route doesn't exist."});
}


module.exports = {
    errorHandler,
    notFound
}