const express = require("express");
const router = express.Router();
const { Location } = require("../models");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;


router.get("/public", (req, res) => {
  return res.send("You have called a public route");
});

router.get("/public/location", async (req, res) => {
  try{
    const results = 
    await Location.findAll();
    console.table(JSON.parse(JSON.stringify(results)));
    return res.send(JSON.stringify(results));
  }catch (err) {
    console.log(err);
  }
});


router.get("/public/location/:located_at", async (req, res) => {
  try{
    const results = 
    await Location.findAll({
      where: { located_at: req.params.located_at }
    });
    console.table(JSON.parse(JSON.stringify(results)));
    return res.send(JSON.stringify(results));
  }catch (err) {
    console.log(err);
    }
  });

module.exports = router;
