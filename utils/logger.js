// log info 
function info(...params){
    console.log(...params);
}

// log errors 
function error(...params){
    console.error(...params)
}

module.exports = {
    info,
    error
}