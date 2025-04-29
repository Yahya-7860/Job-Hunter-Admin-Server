const { handleAddAdmin, handleAdminDelete } = require('../controller/adminController');

const adminRouter = require('express').Router();

adminRouter.post("/add_admin", handleAddAdmin);
adminRouter.delete("/delete_admin", handleAdminDelete);
module.exports = { adminRouter, handleAdminDelete };