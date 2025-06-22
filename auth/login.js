const { adminModel } = require("../model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const handleAdminLogin = async (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
        try {
            const admin = await adminModel.findOne({ username });
            if (!admin) {
                return res.status(404).json({ Message: "User not found" });
            }
            const hashedpas = admin.password;
            const isMatch = await bcrypt.compare(password, admin.password);
            if (!isMatch) {
                return res.status(401).json({ Message: "Incorrect Password", hashedpas });
            }

            const secretKey = process.env.JWT_SECRETKEY;
            const token = jwt.sign({
                username: admin.username,
                password: admin.password
            }, secretKey, { expiresIn: 60 * 60 });

            res.status(200).json({ Message: "Found", token });
        } catch (error) {
            console.error(error);
            res.status(401).json({ Message: "Authentication failed" });
        }
    }
}

module.exports = { handleAdminLogin };