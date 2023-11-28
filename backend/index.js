const express = require('express')
const app = express()
const port = 5003
const mongoDB = require("./db");

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-with, Content-Type, Accept"
  );
  next();
})
mongoDB();
app.get('/', (req, res) => {
  res.send('Hello Sasank!')
})
app.use(express.json());
app.use('/api',require("./Routes/CreateU"));
app.use('/api',require("./Routes/CreateItem"));
app.use('/api',require("./Routes/DisplayData"));
app.use('/api',require("./Routes/OrderData"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})