const express = require("express");
const router = express.Router();
const LocationController = require("../controllers/LocationController");
<<<<<<< HEAD
const { Cuisine, Price } = require("../models")
=======

const { Cuisine, Price } = require("../models")

>>>>>>> 31c09d4648251e988f3f03d3ca5d3de365629817

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
<<<<<<< HEAD
router.post("/user/location", locationController.create);
router.put("/user/location", locationController.update);
=======

router.post("/user/location", locationController.create);
router.put("/user/location", locationController.update);

>>>>>>> 31c09d4648251e988f3f03d3ca5d3de365629817
router.delete("/user/cuisine/:cuisineId", locationController.delete);
router.delete("/user/price/:priceId", locationController.delete);

module.exports = router;
