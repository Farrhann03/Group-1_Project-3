const express = require("express");
const router = express.Router();
const LocationController = require("../controllers/LocationController");

const { Cuisine, Price } = require("../models")


const locationController = new LocationController();

router.get("/user", (req, res) => {
  return res.send("You have called a user route");
});

router.get("/user/cuisine", async (req, res) => {
  const results =
  await Cuisine.findAll();

  return res.send(JSON.stringify(results));
});

router.get("/user/price", async (req, res) => {
const results =
await Price.findAll();
;

return res.send(JSON.stringify(results));
});

// Invoke onboard() in LocationController based on the route
router.post("/user/onboard", locationController.onboard);
//router.post("/user/offboard", locationController.offboard);

router.post("/user/location", locationController.create);
router.put("/user/location", locationController.update);

router.delete("/user/cuisine/:cuisineId", locationController.delete);
router.delete("/user/price/:priceId", locationController.delete);

module.exports = router;
