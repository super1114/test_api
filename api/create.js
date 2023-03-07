const app = require("express")();
const createRouter = require("../routes/createRouter");

app.use("/api/nft/", createRouter);

module.exports = app;