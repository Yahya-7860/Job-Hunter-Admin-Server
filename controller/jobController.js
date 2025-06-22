require('dotenv').config();
const { jobModel } = require("../model");
const { getIo } = require("../services/socket");
const nodemailer = require('nodemailer')
const SECRET_PASS = process.env.SECRET_PASS;

const handleJobPost = async (req, res) => {

    const { formData, allSubs } = req.body;
    const { companyName, role, jobType, overview, jobDescription, requirement, applyLink, email } = formData;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'help.jobhunter@gmail.com',
            pass: 'ocsc fode jqwo ejla'
        }
    });
    let mailOptions = {
        from: 'help.jobhunter@gmail.com',
        to: 'explore.shamin7860@gmail.com',
        bcc: allSubs.join(','),
        subject: 'New hiring posted on Job Hunter',
        text: 'Apply Here'
    };

    if (!companyName || !role || !overview) {
        return res.status(400).json({ Message: "All fields are required" });
    }
    else {
        try {
            const job = await jobModel.create({ companyName, role, jobType, overview, jobDescription, requirement, applyLink, email })
            const io = getIo();
            io.emit('onNewJobPosted', job);
            //! currently stopped for testing 
            // transporter.sendMail(mailOptions, (error, info) => {
            //     if (error) {
            //         console.log(error);
            //     } else {
            //         console.log('Email sent successfully to:', allSubs);
            //     }
            // })

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