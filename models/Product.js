const mongoose = require("mongoose");
// const { Boolean } = require("webidl - conversions");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true, unique: true },
    img: { type: String, required: true },
    categories: { type: Array },
     size : { type: String},
    color: { type: String },
    price: { type: String, required: true },
   
  },
  { timeStamps: true ,}
);

module.exports = mongoose.model("Product", ProductSchema);
