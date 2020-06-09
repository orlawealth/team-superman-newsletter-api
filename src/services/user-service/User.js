const mongoose = require("mongoose");

const userModel = mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  // _id: Number,
  name: String,
  email: String,
});

module.exports = mongoose.model("User", userModel);
