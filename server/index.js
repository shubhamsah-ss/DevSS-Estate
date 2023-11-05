const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const morgan = require('morgan')

const app = express()

// MIDDLEWARES
app.use(morgan('dev'))
app.use(express.json())

// DATABASE CONNECTIONS
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("Database connection established");
}).catch(error => {
    console.log(error);
})


// ROUTES
app.use('/api/users', require('./routes/userRouter'))
app.use('/api/auth', require('./routes/authRouter'))



app.use((error, req, res, next) => {
    const statusCode = error.statusCode || 500;
    const message = error.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})

app.listen(process.env.PORT,() => {
    console.log("Server started listening on port " + process.env.PORT);
})