const express = require('express');
const { jobRouter } = require('./router');
const app = express();

app.listen(5000, () => {
    console.log("Server started listening at port 5000");
})
app.use(express.json());

app.use("/jobhunterpost", jobRouter);