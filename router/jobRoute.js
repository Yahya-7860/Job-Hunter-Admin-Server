const { handleJobPost, handleJobDelete } = require('../controller');
const jobRouter = require('express').Router();

jobRouter.post("/job_post", handleJobPost);
jobRouter.delete("/post_delete", handleJobDelete);

module.exports = { jobRouter };