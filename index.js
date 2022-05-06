const app = require('./routes');
const PORT = 3000;

app.get('/', (req, res) => {
  res.send("Go to: /location  or /cruisine or /price")
})

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
  
});