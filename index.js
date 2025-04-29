require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const { jobRouter, adminRouter } = require('./router');

const MONGODB_URL = process.env.MONGODB_URL;

app.listen(5000, () => {
    console.log("Server started listening at port 5000");
})
const DB_Connect = async () => {
    try {
        await mongoose.connect(MONGODB_URL);
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Unable to connect to database");

    }
}
DB_Connect();
app.use(express.json());

app.use("/", jobRouter);
app.use("/", jobRouter);
app.use("/", adminRouter);