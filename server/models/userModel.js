const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: 'String',
        required: true,
        unique: true,
    },
    email: {
        type: 'String',
        required: true,
        unique: true,
    },
    password: {
        type: 'String',
        required: true,
    }
}, { timestamps: true })

const userModel = new mongoose.model('user', userSchema);


module.exports = userModel;