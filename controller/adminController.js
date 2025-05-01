const { adminModel } = require("../model");
const bcrypt = require("bcrypt");

const handleAddAdmin = async (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
        try {
            await adminModel.create({ username, password });
            res.status(200).json({ Message: "Admin Created" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ Message: "Unable to add admin" });
        }
    }
}

const handleAdminDelete = async (req, res) => {
    const { id } = req.query;
    if (id) {
        try {
            await adminModel.findOneAndDelete({ _id: id });
            res.status(200).json({ Message: "admin Deleted" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ Message: "Unable to delete admin" });
        }
    }
}
module.exports = { handleAddAdmin, handleAdminDelete };