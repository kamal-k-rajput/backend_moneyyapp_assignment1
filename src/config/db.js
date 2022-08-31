const mongoose = require("mongoose");
require("dotenv").config();
const connect = () => {
  return mongoose.connect(
    `mongodb+srv://kamalkishor:Kamal-1234@cluster0.thznawo.mongodb.net/test`
  );
};

module.exports = connect;
