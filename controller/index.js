const { handleAddAdmin, handleAdminDelete } = require("./adminController");
const { handleJobDelete, handleJobPost, handleGetPosts } = require("./jobController");


module.exports = { handleJobDelete, handleJobPost, handleAddAdmin, handleAdminDelete, handleGetPosts };