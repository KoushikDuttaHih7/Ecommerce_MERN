const express = require("express");
const {
  getAllproducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../controllers/productController");

const router = express.Router();

// Get All Products
router.route("/products").get(getAllproducts);
// Create a Product
router.route("/product/new").post(createProduct);
// Update a Product
router.route("/product/:id").put(updateProduct);
// Delete a Product
router.route("/product/:id").delete(deleteProduct);
// Get a single Product
router.route("/product/:id").get(getProductDetails);

module.exports = router;
