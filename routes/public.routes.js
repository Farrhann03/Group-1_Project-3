const express = require("express");
const router = express.Router();
const { Location } = require("../models");
<<<<<<< HEAD

=======
>>>>>>> 31c09d4648251e988f3f03d3ca5d3de365629817

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


<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> 31c09d4648251e988f3f03d3ca5d3de365629817
