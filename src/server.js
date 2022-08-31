const app = require("./app");

require("dotenv").config();
const connect = require("./config/db");

app.listen(process.env.PORT||3000, async () => {
  console.log(`listning on the port${process.env.PORT}`);
  connect();
  console.log("connected to the data base");
});
