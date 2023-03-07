const app = require("express")();
const morgan = require('morgan')
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors')
const fileUpload = require('express-fileUpload')

const createRouter = require("./routes/createRouter");

const CLOUDURL = "mongodb+srv://james:foreverwithhys@xrpl-cluster.j3xqx9d.mongodb.net/nftDB";
const LOCALURL = "mongodb://127.0.0.1:27017/nftDB";

//Connect MongoDB
mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("MongoDB Connected successfully To MongoDB Atlas");
})

//middleware
app.use(fileUpload());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());

app.use(express.json());
app.use(morgan('dev'));

app.use("/api/", createRouter);

module.exports = app;