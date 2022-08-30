const express = require("express");
const authenticate = require("../middleware/authenticate");

const router = express.Router();
const ReviewModel = require("../models/review.model");

// create a review

router.post("/:productId/create", authenticate, async (req, res) => {
  try {
    console.log(req.params, "params");
    req.body.productId = req.params.productId;
    const review = await ReviewModel.create(req.body);
    console.log(req.body, "from the req.body.revieww.controller");
    if (!review) {
      return res
        .status(404)
        .send({ status: false, message: "Review not Created." });
    }
    return res.status(201).send({ id: review._id, review });
  } catch (err) {
    return res.status(404).send({ status: false, message: err.message });
  }
});
router.get("/:productId", async (req, res) => {
  try {
    const reviews = await ReviewModel.find({ productId: req.params.productId });
    if (!reviews) {
      return res.status(404).send({
        status: false,
        message: " No review available for this product",
      });
    }
    return res.status(200).send({ reviews });
  } catch (err) {
    return res.status(404).send({ status: false, message: err.message });
  }
});
module.exports = router;
