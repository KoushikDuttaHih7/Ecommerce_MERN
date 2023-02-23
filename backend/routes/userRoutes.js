const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
} = require("../controllers/userController");
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

module.exports = router;
