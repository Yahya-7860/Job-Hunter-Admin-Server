const { emailModel } = require("../model");

const handleGetEmail = async (req, res) => {
    try {
        const AllMails = await emailModel.find();
        res.status(200).json({ Message: "success", AllMails });
    } catch (error) {
        console.error(error);
        res.status(500).json({ Message: "Server error in email fetching" })
    }

}
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
const handleEmailDelete = async (req, res) => {
    const { id } = req.query;
    if (id) {
        try {
            await emailModel.findOneAndDelete({ _id: id });
            res.status(200).json({ Message: "deleted" });

        } catch (error) {
            console.error(error);
            res.status(500).json({ Message: "Server error in email deletion" })
        }
    }
}
module.exports = { handleEmail, handleEmailDelete, handleGetEmail };