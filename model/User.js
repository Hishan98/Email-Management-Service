const mongoose = require('mongoose');

const userSchema =new mongoose.Schema({
    to:{
        type: String,
        require: true,
        max: 255,
        min: 6
    },
    content:{
        type: String,
        require: true,
        max: 255,
        min: 6,
    },
    subject:{
        type: String,
        require: true,
        max: 255,
        min: 6
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);