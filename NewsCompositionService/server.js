const app = require("./src/app");

const { DB_URI } = require("./src/config/config")
const mongoose = require("mongoose");
mongoose.connect(DB_URI)
.then(result=>{
  console.log(result);
  console.log("connected to mongoDB successfully");
})
.catch(err=>{
  console.log(err);
  console.log("unable to connect to mongoDb");
});


app.listen(8000, () => {
  console.log("running on port 8000");
  console.log("--------------------------");
});
