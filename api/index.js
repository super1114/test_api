const app = require("express")();
const bodyparser = require('body-parser');

// const nftRouterHandler = require('./routes/nftHandleRouter');
const PORT = 8000;
//Middleware

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//Router
app.get('/api/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.send("HELLO WORLD");
});

module.exports = app;