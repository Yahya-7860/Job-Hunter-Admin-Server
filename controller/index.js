const { handleAddAdmin, handleAdminDelete } = require("./adminController");
const { handleEmail, handleEmailDelete, handleGetEmail } = require("./emailController");
const { handleJobDelete, handleJobPost, handleGetFullTimePosts, handleGetInternPosts, handleGetAllPosts } = require("./jobController");


module.exports = { handleJobDelete, handleJobPost, handleAddAdmin, handleAdminDelete, handleGetFullTimePosts, handleEmail, handleEmailDelete, handleGetEmail, handleGetInternPosts, handleGetAllPosts };