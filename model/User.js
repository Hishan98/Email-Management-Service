const mongoose = require('mongoose');

const userSchema =new mongoose.Schema({
    id:{
        type: String,
        require: true,
        max: 255,
        min: 6
    },
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
    status:{
        type: String,
        require: true,
        max: 100,
        min: 6,
        enum: ['SENT', 'QUEUED', 'FAILED',]
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);