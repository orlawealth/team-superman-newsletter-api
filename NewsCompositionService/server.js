const app = require("./src/app");

const { DB_URI } = require("./src/config/config")
const mongoose = require("mongoose");
mongoose.connect(DB_URI);


app.listen(9000, () => {
  console.log("running on port 9000");
  console.log("--------------------------");
});
