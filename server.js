const express = require("express");
require('dotenv').config()
const {DB_CONFIG} = require("./utils/config");
const {errorHandler, notFound} = require("./utils/middleware");
const authRouter = require("./routes/authRoute");
const userRouter = require("./routes/userRoute");
const postRouter = require("./routes/postRoute");
const commentRouter = require("./routes/commentRoute");
const categoryRouter = require("./routes/categoryRoute");


const PORT = process.env.PORT || 3000;

DB_CONFIG();
const app = express();

app.use(express.json());
app.use("/api/v1/",authRouter, userRouter, postRouter, commentRouter, categoryRouter);  

app.use(errorHandler);
app.use(notFound);

app.listen(PORT, ()=>{
    console.log(`App is listening on port ${PORT}`);
})