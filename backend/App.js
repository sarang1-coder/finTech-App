require('dotenv').config();
const express=require('express');
const connectDB = require('./config/db');
const { MongoClient } = require('mongodb');
const app=express();
const PORT=8000;


connectDB();

app.get('/',(req,res)=>{
    res.send("Hello from Backend");
 });

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

