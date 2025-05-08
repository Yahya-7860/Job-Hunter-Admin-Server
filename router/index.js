const { adminRouter } = require("./adminRoute");
const { emailRouter } = require("./emailRoute");
const { jobRouter } = require("./jobRoute");

module.exports = { jobRouter, adminRouter, emailRouter };