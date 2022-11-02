const http = require('http');
const app = require('./app/app');
require('dotenv').config();

http.createServer(app).listen(process.env.port, () => {
    console.log(`Server running on port: ${process.env.port}`);
});


// const express = require("express");
// require("dotenv").config();
// const app = express();


// app.get("/", (req, res, next) => {
//     res.json({
//         message: "Did you GET it!!!!"
//     });
// });

// // middleware modules
// app.use((req, res, next) => {
//     const error = new Error("NOT FOUND!!");
//     error.status = 404;
//     next(error);
// });

// app.use((error, req, res, next) => {
//     res.status(error.status || 500).json({ 
//         error: {
//             message: error.message,
//             status: error.status,
//             method: req.method  
//         }
//     });
// })


// app.listen(process.env.port, () => console.log(`Starting server on port ${process.env.port}`))
