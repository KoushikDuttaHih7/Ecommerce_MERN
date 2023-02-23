const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updatePassword,
  updateProfile,
  getAllUsers,
  getSingleUser,
  updateUserRole,
  deleteUser,
} = require("../controllers/userController");
const {
  isAuthenticatedUser,
  authorizeRoles,
} = require("../middleware/authMiddleware");
const router = express.Router();

// Register User
router.route("/register").post(registerUser);
// Login User
router.route("/login").post(loginUser);
// Forgot password
router.route("/password/forgot").post(forgotPassword);
// Reset Password
router.route("/password/reset/:token").put(resetPassword);
//Logout user
router.route("/logout").get(logout);

// User Details
router.route("/me").get(isAuthenticatedUser, getUserDetails);
// Update Password
router.route("/password/update").put(isAuthenticatedUser, updatePassword);
// Update User
router.route("/me/update").put(isAuthenticatedUser, updateProfile);

// Admin All User Data
router
  .route("/admin/users")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllUsers);
// Admin Single User Data
router
  .route("/admin/user/:id")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getSingleUser);

router
  .route("/admin/user/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateUserRole);

router
  .route("/admin/user/:id")
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);

module.exports = router;
