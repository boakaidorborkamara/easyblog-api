const express = require("express");
require('dotenv').config()
const {DB_CONFIG} = require("./utils/config");
const userRouter = require("./routes/userRoute")


const PORT = process.env.PORT || 3000;

DB_CONFIG();
const app = express();


app.use("/v1/api", userRouter);  

app.listen(PORT, ()=>{
    console.log(`App is listening on port ${PORT}`);
})