const express = require("express");
const router = express.Router();
const LocationController = require("../controllers/LocationController");


const locationController = new LocationController();

router.get("/user", (req, res) => {
  return res.send("You have called a user route");
});

// Invoke onboard() in LocationController based on the route
router.post("/user/onboard", locationController.onboard);
//router.post("/user/offboard", locationController.offboard);
router.put("/user/vehicle", locationController.update);
router.delete("/user/cruisine/:cruisineId", locationController.delete);
router.delete("/user/price/:priceId", locationController.delete);

module.exports = router;