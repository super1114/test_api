const app = require('express')();

app.get('/api', (req, res) => {
    res.send("Hello Truecolor");
});

module.exports = app();