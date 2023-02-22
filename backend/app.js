const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTE IMPORT
const product = require("./routes/productRoutes");

app.use("/api/v1", product);

module.exports = app;
