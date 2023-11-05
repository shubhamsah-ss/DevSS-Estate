const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const morgan = require('morgan')

const app = express()

// MIDDLEWARES
app.use(morgan('dev'))


// DATABASE CONNECTIONS
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Database connection established");
}).catch(error => {
    console.log(error);
})


app.listen(process.env.PORT,() => {
    console.log("Server started listening on port " + process.env.PORT);
})