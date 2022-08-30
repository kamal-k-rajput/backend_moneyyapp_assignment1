const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    productName: {
      type: String,
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
    qty: {
      type: Number,
      required: true,
      default: 1,
    },
    deliveryCharge: {
      type: Number,
      default: 0,
    },
    images: { type: Array, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const Product = mongoose.model("product", productSchema);

module.exports = Product;
