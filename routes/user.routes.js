const express = require("express");
const router = express.Router();
const LocationController = require("../controllers/LocationController");

const locationController = new LocationController();

router.get("/user", (req, res) => {
  return res.send("You have called a user route");
});


// Invoke onboard() in LocationController based on the route
router.post("/user/newlocation", locationController.create);
router.put("/user/location", locationController.update);
router.delete("/user/location/:locationId", locationController.delete);

module.exports = router;
