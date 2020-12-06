const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
//Import Routes
const authRoute = require('./routes/auth');

dotenv.config();

//Connect to DB
mongoose.connect(
process.env.DB_CONNECT,
{ useNewUrlParser: true ,useUnifiedTopology: true},
() => console.log('Connected to MongoDB!')
);

//Middleware
app.use(express.json());

//Rout Middlewares
app.use('/api/user', authRoute);

app.listen(2010, () => console.log('Server Up And Running...')); 