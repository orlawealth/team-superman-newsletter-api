const express = require("express");
const path = require("path");
const app = express();

//Enabling CORS
app.use((req, res, next)=>{
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers",
  "Origin, x-Requested-Width,Content-Type,Accept,Authorization,X-Pagination");
  if(req.method==='OPTIONS'){
      res.header("Access-Control-Allow-Methods",
      "POST,GET");
      return res.status(200).json({});
  }
  next();
});

// EXPRESS STATIC MIDDLEWARE - TO SERVE THE FILES IN PUBLIC DIR
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

module.exports = app;