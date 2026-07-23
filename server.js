const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;


// app.use("/v1/api")

app.listen(PORT, ()=>{
    console.log(`App is listening on port ${PORT}`);
})