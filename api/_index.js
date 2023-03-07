const multer = require('multer');
const morgan = require('morgan');
const app = require('express')();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors')
const fileUpload = require('express-fileUpload')
const nftRouterHandler = require('../routes/nftHandleRouter.js');

const PORT = 8000;
const CLOUDURL = "mongodb+srv://james:foreverwithhys@xrpl-cluster.j3xqx9d.mongodb.net/nftDB";
const LOCALURL = "mongodb://127.0.0.1:27017/nftDB";

//Connect MongoDB
mongoose.connect(CLOUDURL);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("MongoDB Connected successfully To MongoDB Atlas");
})

//use static files
app.use(express.static('public'));
//middleware
app.use(fileUpload());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());

app.use(express.json());
app.use(morgan('dev'));

//Router
app.use('/api/nft/', nftRouterHandler);
app.get('/api', (req, res) => {
    res.send("Hello Truecolor");
});

// app.listen(PORT, () => {
//     console.log(`Server is running at ${PORT}`);
// })

module.exports = app;