const { default: mongoose } = require("mongoose");

const emailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    }
})

const emailModel = mongoose.model('Email', emailSchema);
module.exports = { emailModel }