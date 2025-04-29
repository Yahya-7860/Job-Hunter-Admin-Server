const { handleAddAdmin, handleAdminDelete } = require("./adminController");
const { handleJobDelete, handleJobPost } = require("./jobController");


module.exports = { handleJobDelete, handleJobPost, handleAddAdmin, handleAdminDelete };