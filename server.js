const express = require("express");
const cors = require('cors')
const swaggerUi = require('swagger-ui-express');
require('dotenv').config()
const {DB_CONFIG} = require("./utils/config");
const {errorHandler, notFound, loggerMiddlware} = require("./utils/middleware");
const authRouter = require("./routes/authRoute");
const userRouter = require("./routes/userRoute");
const postRouter = require("./routes/postRoute");
const commentRouter = require("./routes/commentRoute");
const categoryRouter = require("./routes/categoryRoute");
const {openapiSpecification} = require("./utils/swagger-config");


const PORT = process.env.PORT || 3000;

DB_CONFIG();
const app = express();

// Adds headers: Access-Control-Allow-Origin: *
app.use(cors())
app.use(express.json());
app.use(loggerMiddlware);
app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(openapiSpecification, {explorer:true}));
app.use("/api/v1/",authRouter, userRouter, postRouter, commentRouter, categoryRouter);  

app.use(errorHandler);
app.use(notFound);

app.listen(PORT, ()=>{
    console.log(`App is listening on port ${PORT}`);
})