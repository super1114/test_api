const app = require("express")();
const bodyparser = require('body-parser');

const nftRouterHandler = require('./routes/nftHandleRouter.js');

//Middleware

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//Router

app.get('/api', (req, res) => {
    res.send("HELLO WORLD");
});

app.use('/api/nft', nftRouterHandler);


module.exports = app;