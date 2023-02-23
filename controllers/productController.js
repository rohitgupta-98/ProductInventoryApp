const Category = require('../model/Category');
const Product = require("../model/Product");

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("categoryId");
    res.json(products);
  } catch (error) {
    res.json({ message: error });
  }
};

// Get single product
const getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id }).populate("categoryId");
    res.json(product);
  } catch (error) {
    res.json({ message: error });
  }
};

// Add new product
const createProduct = async (req, res) => {

  const savedCategory = await Category.create({ categoryName: req.body.categoryName });

  const product = new Product({
    productName: req.body.productName,
    qtyPerUnit: req.body.qtyPerUnit,
    unitPrice: req.body.unitPrice,
    unitInStock: req.body.unitInStock,
    discontinued: req.body.discontinued,
    categoryId: savedCategory._id
  });

  try {
    const savedProduct = await product.save();
    res.send(savedProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};

// update product
const updateProduct = async (req, res) => {
  try {
    const product = {
      productName: req.body.productName,
      qtyPerUnit: req.body.qtyPerUnit,
      unitPrice: req.body.unitPrice,
      unitInStock: req.body.unitInStock,
      discontinued: req.body.discontinued,
      categoryId: req.body.categoryId
    };

    const updatedProduct = await Product.findOneAndUpdate(
      { _id: req.params.id },
      product, { new: true }
    );
    res.json(updatedProduct);
  } catch (error) {
    res.json({ message: error });
  }
};

// delete product
const deleteProduct = async (req, res) => {
  try {
    const removedProduct = await Product.findByIdAndDelete(req.params.id);
    res.json(removedProduct);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
}