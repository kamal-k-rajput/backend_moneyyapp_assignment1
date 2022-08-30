const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      requred: true,
      ref: "product",
    },
    description: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Review = new mongoose.model("review", reviewSchema);

module.exports = Review;
