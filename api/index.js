var app = require('express')();

app.get("/api/", (req, res) => {
    res.send("Hello World");
});

// module.exports = app;
app.listen(8000, () => {
    console.log("server is connected");
})