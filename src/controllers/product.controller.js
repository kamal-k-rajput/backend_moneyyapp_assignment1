const express = require("express");

const router = express.Router();
const Product = require("../models/product.model");
//--------------------------get all products--------------------------------
router.get("/", async (req, res) => {
  try {
    console.log(req.query);
    let limit = +req.query.results || 10;
    let page = +req.query.pageNo || 1;
    let skip = limit * (page - 1);
    let sort = +req.query.sortBy || 1;
    let products = await Product.find({
      mrp: { $gt: req.query.minPrice, $lt: req.query.maxPrice },
    })
      .skip(skip)
      .limit(limit)
      .sort({ price: sort })
      .lean()
      .exec();
    if (!products) {
      return res
        .status(404)
        .send({ status: false, message: " product not found" });
    }
    let count = await Product.find().count();

    return res.status(201).send({ status: true, products, count });
  } catch (err) {
    return res.status(404).send({ status: false, message: err.message });
  }
});
// ------------------create a new product------------------------
router.post("/create", async (req, res) => {
  try {
    let product = await Product.create(req.body);
    if (!product) {
      return res.status(404).send({
        status: false,
        message: " product not created pass all required fields",
      });
    }
    return res.status(201).send({ status: true, product: product });
  } catch (err) {
    return res.status(404).send({ status: false, message: err.message });
  }
});
// ------------------get a single product by id ----------------------
router.get("/:id", async (req, res) => {
  try {
    let product = await Product.findById(req.params.id).lean().exec();
    if (!product) {
      return res
        .status(404)
        .send({ status: false, message: " product not found" });
    }
    return res.status(200).send({ status: true, product: product });
  } catch (err) {
    return res.status(404).send({ status: false, message: err.message });
  }
});

// ------------------edit an existing product by id --------------------
router.put("/:id/edit", async (req, res) => {
  try {
    let product = await Product.findById(req.params.id).lean().exec();
    if (!product) {
      return res
        .status(404)
        .send({ status: false, message: " product not found" });
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(201).send({ status: true, product: product });
  } catch (err) {
    return res.status(404).send({ status: false, message: err.message });
  }
});

module.exports = router;
