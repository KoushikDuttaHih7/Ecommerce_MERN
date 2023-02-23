const express = require("express");
const {
  getAllproducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../controllers/productController");
const {
  isAuthenticatedUser,
  authorizeRoles,
} = require("../middleware/authMiddleware");

const router = express.Router();

// Get All Products
router.route("/products").get(getAllproducts);
// Create a Product
router
  .route("/product/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);
// Update a Product
router
  .route("/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct);
// Delete a Product
router
  .route("/product/:id")
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);
// Get a single Product
router.route("/product/:id").get(getProductDetails);

module.exports = router;
