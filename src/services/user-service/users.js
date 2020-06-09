const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const mongoose = require("mongoose");

require("./User");
const User = mongoose.model("User");

mongoose.connect(
  "mongodb+srv://dreywesson:@@PASSword@cluster0-lusur.mongodb.net/dreywesson?retryWrites=true&w=majority",
  () => {
    console.log("Database is connected..");
  }
);

app.get("/", (req, res) => res.send("this is our endpoint"));

app.post("/users", (req, res) => {
  console.log(req.body);
  res.send("Testing our user service");
  let newUser = {
    // _id: new mongoose.Types.ObjectId(),
    // _id: Number,
    name: req.body.name,
    email: req.body.email,
  };

  let user = new User(newUser);
  user
    .save()
    .then((result) => {
      console.log(result);
      console.log("New user created!");
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
});

app.listen(9250, () => console.log("Server is running @ port 9250"));
