const app = require("express")();
const createRouter = require("./routes/createRouter");

app.use("/api/", createRouter);

module.exports = app;