const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    mrp: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 1,
    },
    deliveryCharge: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        reviewId: { type: String },
      },
    ],
    images: { type: Array, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const Product = new mongoose.model("product", productSchema);

module.exports = Product;
