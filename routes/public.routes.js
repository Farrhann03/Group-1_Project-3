const express = require("express");
const router = express.Router();
const { Location, Cuisine, Price } = require("../models");

router.get("/public", (req, res) => {
  return res.send("You have called a public route");
});

router.get("/public/location", async (req, res) => {
  const results = await Location.findAll();
  await Cuisine.findAll();
  await Price.findAll();

  return res.send(JSON.stringify(results));
});

router.get("/public/cruisine", async (req, res) => {
  const results = await Cuisine.findAll();
  await Location.findAll();
  await Price.findAll();

  return res.send(JSON.stringify(results));
});

router.get("/public/price", async (req, res) => {
  const results = await Price.findAll();
  await Cuisine.findAll();
  await Location.findAll();

  return res.send(JSON.stringify(results));
});

module.exports = router;
