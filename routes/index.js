const express = require("express");
const app = express();
app.use(express.json()); // Enable express to parse JSON as request body.
const userRoutes = require("./user.routes");
const publicRoutes = require("./public.routes");

app.use(userRoutes);
app.use(publicRoutes);

module.exports = app;