const express = require("express");
const {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");
const {
  isAuthenticatedUser,
  authorizeRoles,
} = require("../middleware/authMiddleware");
const router = express.Router();

// Create new Order
router.route("/order/new").post(isAuthenticatedUser, newOrder);
// Get Single Order Details
router.route("/order/:id").get(isAuthenticatedUser, getSingleOrder);
// Get My Order
router.route("/orders/myOrders").get(isAuthenticatedUser, myOrders);
// Get All Orders
router
  .route("/admin/orders")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllOrders);
// Update Order Status
router
  .route("/admin/orders/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateOrder);
// Delete Orders
router
  .route("/admin/orders/:id")
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder);

module.exports = router;
