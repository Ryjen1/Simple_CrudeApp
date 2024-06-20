const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const productSchema = Schema({
  productName: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("products", productSchema);
