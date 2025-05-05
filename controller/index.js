const { handleAddAdmin, handleAdminDelete } = require("./adminController");
const { handleEmail } = require("./emailController");
const { handleJobDelete, handleJobPost, handleGetPosts } = require("./jobController");


module.exports = { handleJobDelete, handleJobPost, handleAddAdmin, handleAdminDelete, handleGetPosts, handleEmail };