const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
} = require("../controllers/userController");
const router = express.Router();

// Register User
router.route("/register").post(registerUser);
// Login User
router.route("/login").post(loginUser);
//Logout user
router.route("/logout").post(logout);

module.exports = router;
