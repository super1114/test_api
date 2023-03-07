const app = require("express")();
const bodyparser = require('body-parser');

const nftRouterHandler = require('./routes/nftHandleRouter');
const PORT = 8000;
//Middleware

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//Router

app.post('/api/nft/create/', (req, res) => {
    res.send("True Color");
});

app.get('/api/nft/create/', (req, res) => {
    res.send("HELLO WORLD");
});

// app.use('/api/nft/', nftRouterHandler);

// app.listen(PORT, () => {
//     console.log(`Server is running at ${PORT}`);
// })

module.exports = app;