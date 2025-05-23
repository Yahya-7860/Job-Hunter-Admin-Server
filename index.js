require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const { jobRouter, adminRouter, emailRouter } = require('./router');
const PswHashing = require('./middleware/pswHash');
const cors = require("cors");
const MONGODB_URL = process.env.MONGODB_URL;

app.use(cors());

app.listen(5000, '0.0.0.0', () => {
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

app.use("/mail", emailRouter);
app.use("/", jobRouter);
app.use("/admin-login", adminRouter);
app.use("/", PswHashing, adminRouter);