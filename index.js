const app = require('./routes');
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
//const express = require('express');
const path = require('path');
const cors = require('cors');


app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("Go to:  /public  /user");
});


// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "pug");
// app.use(express.static(path.join(__dirname, "public")));

// app.get('/', (req, res) => {
//   res.render("index", { title: "HOME"});
// });


app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}...`);
  
});