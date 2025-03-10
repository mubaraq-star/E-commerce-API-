const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    product: [
      {
        productId: {
          type: String,
        },
        quantity: { type: Number, default: 1 },
      },
    ],
  },
  { timeStamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
