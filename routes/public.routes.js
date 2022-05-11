const express = require("express");
const router = express.Router();
const { Location, Cuisine, Price } = require("../models");


router.get("/public", (req, res) => {
  return res.send("You have called a public route");
});

router.get("/public/location", async (req, res) => {
  const results = 
  await Location.findAll();
  await Cuisine.findAll();
  await Price.findAll();
  console.table(JSON.parse(JSON.stringify(results)));
  return res.send(JSON.stringify(results));
});


module.exports = router;