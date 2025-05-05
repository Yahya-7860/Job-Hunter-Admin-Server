const { handleEmail } = require("../controller");
const EmailRouter = require("express").Router();

EmailRouter.post('/save_email', handleEmail);
module.exports = { EmailRouter };