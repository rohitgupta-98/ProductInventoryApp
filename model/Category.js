const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);