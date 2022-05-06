const express = require("express");
const app = express();
app.use(express.json()); // Enable express to parse JSON as request body.
//const protectedRoutes = require("./protected.routes");
const publicRoutes = require("./public");

//app.use(protectedRoutes);
app.use(publicRoutes);

module.exports = app;