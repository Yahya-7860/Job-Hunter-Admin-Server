const { jobModel } = require("../model");

const handleJobPost = async (req, res) => {
    const { companyName, overview, jobDescription, requirement, applyLink } = req.body;

    if (!companyName || !overview || !applyLink) {
        return res.status(400).json({ Message: "All fields are required" });
    }

    try {
        const job = await jobModel.create({ companyName, overview, jobDescription, requirement, applyLink })
        res.status(200).json({ Message: "Job Posted", job });
    } catch (error) {
        console.error(error);
        res.status(500).json({ Message: "Error in posting job" });
    }

}
module.exports = handleJobPost;