const handleJobPost = require('../controller/jobController');
const jobRouter = require('express').Router();

jobRouter.post("/job_post", handleJobPost);

module.exports = { jobRouter };