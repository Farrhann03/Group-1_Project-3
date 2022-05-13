const express = require("express");
const router = express.Router();
const { Location } = require("../models");

router.get("/public", (req, res) => {
  return res.send("You have called a public route");
});

router.get("/public/location", async (req, res) => {
  
  const results = 
  await Location.findAll();

  console.table(JSON.parse(JSON.stringify(results)));
  return res.send(JSON.stringify(results));
});

// router.get("/public/location/:id"), async (req,res)=> {
//   const results =
//   await Location.findByPk(req.params.id).
//     then((results) => res.send(JSON.stringify(results.id)));
//     console.table(JSON.parse(JSON.stringify(results.id)));
// };


module.exports = router;
