const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const ProductSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true, unique: true },
    qtyPerUnit: { type: Number, default: 0 },
    unitPrice: { type: Number, required: true },
    unitInStock: { type: Number, default: 0 },
    discontinued: { type: Boolean,required: true, default: true },
    categoryId: { type: ObjectId,ref: "Category"},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
