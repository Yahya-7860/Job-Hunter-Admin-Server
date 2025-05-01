const { handleAdminLogin } = require('../auth/login');
const { handleAddAdmin, handleAdminDelete } = require('../controller/adminController');

const adminRouter = require('express').Router();

adminRouter.post("/add_admin", handleAddAdmin);
adminRouter.delete("/delete_admin", handleAdminDelete);
adminRouter.get("/auth", handleAdminLogin);
module.exports = { adminRouter, handleAdminDelete, handleAdminLogin };