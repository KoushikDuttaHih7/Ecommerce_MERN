const express = require("express");
const {
  getAllproducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getProductReviews,
  deleteReviews,
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
  .route("/admin/product/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);
// Update a Product
router
  .route("/admin/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct);
// Delete a Product
router
  .route("/admin/product/:id")
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);
// Get a single Product
router.route("/product/:id").get(getProductDetails);
// Product Review
router.route("/review").put(isAuthenticatedUser, createProductReview);
// Get All Reviews
router.route("/reviews").get(getProductReviews);
// Delete a Review
router.route("/review/delete").delete(isAuthenticatedUser, deleteReviews);

module.exports = router;
