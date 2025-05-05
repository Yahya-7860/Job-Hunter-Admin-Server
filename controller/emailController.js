const { emailModel } = require("../model");

const handleEmail = async (req, res) => {
    const { email } = req.body;
    if (email) {
        try {
            const mail = await emailModel.create({ email });
            if (mail) {
                res.status(200).json({ Message: "success" });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ Message: "Server error in email processing" })
        }
    }
}
module.exports = { handleEmail };