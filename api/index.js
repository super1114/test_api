const app = require("express")();
const bodyparser = require('body-parser');

const nftRouterHandler = require('./routes/nftHandleRouter');
const PORT = 8000;
//Middleware

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//Router

app.get('/api/nft', (req, res) => {
    res.send("True Color");
});

app.get('/api/', (req, res) => {
    res.send("HELLO WORLD");
});

// app.use('/api/nft/', nftRouterHandler);

// app.listen(PORT, () => {
//     console.log(`Server is running at ${PORT}`);
// })

module.exports = app;