const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema(
    {
        companyName: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true
        },
        overview: {
            type: String,
            required: true
        },
        jobDescription: {
            type: String,
        },
        requirement: {
            type: String,
        },
        applyLink: {
            type: String,
        },
        email: {
            type: String,
        }
    },
    { timestamps: true }
)
const jobModel = mongoose.model("jobs", jobSchema);
module.exports = { jobModel };