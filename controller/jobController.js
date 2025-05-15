const { jobModel } = require("../model");

const handleJobPost = async (req, res) => {
    const { companyName, role, jobType, overview, jobDescription, requirement, applyLink, email } = req.body;

    if (!companyName || !role || !overview) {
        return res.status(400).json({ Message: "All fields are required" });
    }
    else {
        try {
            const job = await jobModel.create({ companyName, role, jobType, overview, jobDescription, requirement, applyLink, email })
            res.status(200).json({ Message: "Job Posted", job });
        } catch (error) {
            console.error(error);
            res.status(500).json({ Message: "Error in posting job" });
        }
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

const handleGetFullTimePosts = async (req, res) => {
    try {
        const posts = await jobModel.find({ jobType: "full time" });
        res.status(200).json({ Message: "success", posts })
    } catch (error) {
        console.error(error);
        res.status(500).json({ Message: "failed" });
    }
}
const handleGetInternPosts = async (req, res) => {
    try {
        const posts = await jobModel.find({ jobType: "internship" });
        res.status(200).json({ Message: "success", posts })
    } catch (error) {
        console.error(error);
        res.status(500).json({ Message: "failed" });
    }
}
const handleGetAllPosts = async (req, res) => {
    try {
        const posts = await jobModel.find();
        res.status(200).json({ Message: "success", posts })
    } catch (error) {
        console.error(error);
        res.status(500).json({ Message: "failed" });
    }
}
module.exports = { handleJobPost, handleJobDelete, handleGetFullTimePosts, handleGetAllPosts, handleGetInternPosts };