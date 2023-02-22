const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ROUTE IMPORT
const product = require("./routes/productRoutes");
const user = require("./routes/userRoutes");

app.use("/api/v1", product);
app.use("/api/v1", user);

module.exports = app;
