const app = require('./routes');
const PORT = 3000;

app.get('/', (req, res) => {
  res.send("Go to: /public  or /user");
})

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
  
});