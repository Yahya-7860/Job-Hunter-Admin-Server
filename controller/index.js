const { handleAddAdmin, handleAdminDelete } = require("./adminController");
const { handleEmail, handleEmailDelete, handleGetEmail } = require("./emailController");
const { handleJobDelete, handleJobPost, handleGetPosts } = require("./jobController");


module.exports = { handleJobDelete, handleJobPost, handleAddAdmin, handleAdminDelete, handleGetPosts, handleEmail, handleEmailDelete, handleGetEmail };