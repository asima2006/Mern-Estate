const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const authRouter = require('./routes/auth.routes.js')

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to MongoDB");
}).catch(err => console.log(err));

const app = express();
app.use(express.json());

app.listen(3000,()=>{
    console.log('Server is listening on 3000');
});

app.use('/api/auth',authRouter);

app.use((err, req, res, next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode ).json({
        success: false,
        statusCode,
        message,
    });
});