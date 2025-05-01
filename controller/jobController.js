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

const handleJobDelete = async (req, res) => {
    const { id } = req.query;
    if (id) {
        try {
            await jobModel.findOneAndDelete({ _id: id });
            res.status(200).json({ Message: "Post Deleted" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ Message: "Unable to delete post" });
        }
    }
}
module.exports = { handleJobPost, handleJobDelete };