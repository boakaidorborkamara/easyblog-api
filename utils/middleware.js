function errorHandler(err, req, res, next){
    console.log("err", err)

    if(err.name === "ValidationError"){
        res.status(400).json({status:"fail", message:err.message, data:null});
    }

    res.status(500).json({msg:"Server encounter an error"});
}


function notFound(req, res){
    res.status(404).json({msg:"Route doesn't exist."});
}


module.exports = {
    errorHandler,
    notFound
}