const { handleEmail, handleEmailDelete, handleGetEmail } = require("../controller");
const emailRouter = require("express").Router();

emailRouter.post('/save_email', handleEmail);
emailRouter.delete('/delete_email', handleEmailDelete);
emailRouter.get('/get_email', handleGetEmail);
module.exports = { emailRouter };