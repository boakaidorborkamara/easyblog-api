const success = (data, message="Success")=>{
    return{
        success:true,
        message:message,
        data:data,
        error:null
    }
}

const failure = (code, details, message="Request Failed!")=>{
    return{
        success:false,
        message:message,
        data:null,
        error:{
            code,
            details
        }
    }
}

module.exports = {
    success,
    failure
}