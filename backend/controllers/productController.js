const Product = require("../models/productModel");

// Create Product --- Admin
exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json(product);
};

// Get All Products
exports.getAllproducts = async (req, res) => {
  const product = await Product.find();
  res.status(201).json(product);
};

// Update product --- Admin
exports.updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      message: "Product Not Found",
    });
  }

  updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedProduct);
};

// Delete Product --- Admin
exports.deleteProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      message: "Product Not Found",
    });
  }

  await product.remove();

  res.status(200).json({ message: "Product deleted succesfully" });
};

// Get Single Product
exports.getProductDetails = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      message: "Product Not Found",
    });
  }

  res.status(200).json(product);
};
