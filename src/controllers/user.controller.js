const express = require("express");

const authenticate = require("../middleware/authenticate");

const router = express.Router();

const User = require("../models/user.model");

router.put("/:productId", authenticate, async (req, res) => {
  try {
    let user = await User.findByIdAndUpdate(
      req.body.userId,
      { $push: { cart: req.body.cart } },
      {
        new: true,
      }
    )
      .populate(productId)
      .lean()
      .exec();
    return res.status(201).send({ status: true, user: user });
  } catch (err) {
    return res.status(404).send(err);
  }
});

module.exports = router;
