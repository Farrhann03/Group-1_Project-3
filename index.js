const app = require('./routes');
const PORT = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("Go to SUPPER MAKAN APA   /public/location    /user/login/signup");
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}...`);
  
});