const express = require("express");
const NFTModel = require('../model/model.js')
const router = express.Router();

router.get("/", (req, res) => {
  res.send("nft router start");
})

router.post('/imgUpload', (req, res) => {
  if (!req.files) {
    return res.sendStatus(404);
  } else {
    let files = req.files.images;
    if (!Array.isArray(files)) {
      files = [files];
    }

    for (let i = 0; i < files.length; i++) {
      files[i].mv(`${__dirname}/../uploads/${files[i].name}`, function (err) {
        if (err) {
          console.log(err);
          res.sendStatus(404)
          return;
        }
      })
    }

    return res.send({
      success: true
    })
  }
});

router.post('/create', (req, res) => {
  //nftProperties for demo
  // let demo_nftProperties = new Array();
  // demo_nftProperties.push = { color: "red"};
  // demo_nftProperties.push = { size: "big"};

  // let newNFT = {
  //   nftName: req.body.nftName,
  //   nftDescription: req.body.nftDescription,
  //   // nftProperties: req.body.nftDescription
  //   nftProperties: demo_nftProperties
  // };

  // const nft = new NFTModel(newNFT);

  // try {
  //   await nft.save();
  //   res.send(nft);
  // } catch (error) {
  //   res.status(500).send(error);
  // }
  res.send("True Color");
});

module.exports = router;