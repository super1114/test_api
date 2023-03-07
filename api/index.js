var app = require('express')();

app.get("/api/", (req, res) => {
    res.send("Hello World");
});

module.exports = app;