const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to MongoDB");
}).catch(err => console.log(err));

const app = express();

app.listen(3000,()=>{
    console.log('Server is listening on 3000');
});