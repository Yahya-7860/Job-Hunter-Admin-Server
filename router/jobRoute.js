const { handleJobPost, handleJobDelete, handleGetPosts } = require('../controller');
const jobRouter = require('express').Router();

jobRouter.post("/job_post", handleJobPost);
jobRouter.delete("/post_delete", handleJobDelete);
jobRouter.get("/get_posts", handleGetPosts);

module.exports = { jobRouter };