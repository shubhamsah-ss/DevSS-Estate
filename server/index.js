const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const morgan = require('morgan')
const responseMiddleware = require("./middlewares/responseMiddleware");

const app = express()

// MIDDLEWARES
app.use(morgan('dev'))
app.use(express.json())
app.use(responseMiddleware)

// DATABASE CONNECTIONS
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("Database connection established");
}).catch(error => {
    console.log(error);
})


// ROUTES
app.use('/api/users', require('./routes/userRouter'))
app.use('/api/auth', require('./routes/authRouter'))



app.use(require('./middlewares/error'));

app.listen(process.env.PORT,() => {
    console.log("Server started listening on port " + process.env.PORT);
})