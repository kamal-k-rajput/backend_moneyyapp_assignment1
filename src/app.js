const express = require("express");
const { login, register } = require("./controllers/auth.controller");
const productController = require("./controllers/product.controller");
const reviewController = require("./controllers/review.controller");
const app = express();

app.use(express.json());
app.post("/register", register);
app.post("/login", login);
app.use("/product", productController);
app.use("/review", reviewController);
module.exports = app;
