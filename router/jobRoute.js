const { handleJobPost, handleJobDelete, handleGetFullTimePosts, handleGetInternPosts, handleGetAllPosts } = require('../controller');
const jobRouter = require('express').Router();

jobRouter.post("/job_post", handleJobPost);
jobRouter.delete("/post_delete", handleJobDelete);
jobRouter.get("/get_full_time_posts", handleGetFullTimePosts);
jobRouter.get("/get_intern_posts", handleGetInternPosts);
jobRouter.get("/get_all_posts", handleGetAllPosts);

module.exports = { jobRouter };