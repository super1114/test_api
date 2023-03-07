const mongoose = require('mongoose');

const NFTSchema = new mongoose.Schema({
    nftName: {
        type: String,
        required: true,
    },
    nftDescription: {
        type: String,
        required: true,
    },
    nftProperties: {
        type: Object,
        required: true,
    },
});

const NFTModel = mongoose.model("NFTS", NFTSchema);

module.exports = NFTModel;