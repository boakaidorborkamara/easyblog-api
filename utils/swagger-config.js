const swaggerJsdoc = require('swagger-jsdoc');



    const options = {
    definition: {
        openapi: '3.0.0',
        info: {
        title: 'Easy Blog API',
        description:"Easy Blog API help anyone blog in an easy and stress free way.",
        version: '1.0.0',
        },
        servers: [
            {
            url: 'http://localhost:3000',
            description: 'Development server',
            },
            {
                url:"https://easyblog-ckixbebfr-boakaidorborkamaras-projects.vercel.app/",
                description:"Production server"
            }
        ]
    },
    apis: ['./routes/*.js'], // files containing annotations as above
    };
    console.log("in swagger config....")
    const openapiSpecification = swaggerJsdoc(options);


module.exports = { openapiSpecification};