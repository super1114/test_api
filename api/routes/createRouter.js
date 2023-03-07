const createRouter = require("express")();

const NFTModel = require('../model/model.js')

createRouter.post('/create', async (req, res) => {
    //nftProperties for demo
    let demo_nftProperties = new Array();
    demo_nftProperties.push = { color: "red" };
    demo_nftProperties.push = { size: "big" };

    // let newNFT = {
    //     nftName: req.body.nftName,
    //     nftDescription: req.body.nftDescription,
    //     // nftProperties: req.body.nftDescription
    //     nftProperties: demo_nftProperties
    // };
    let newNFT = {
        nftName: "MYNFT",
        nftDescription: "WONDERFUL",
        nftProperties: demo_nftProperties
    };

    const nft = new NFTModel(newNFT);

    try {
        await nft.save();
        res.send(nft);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = createRouter;