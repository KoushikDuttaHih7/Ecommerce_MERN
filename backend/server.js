const app = require("./app");
const dotenv = require("dotenv").config();
const connectDB = require("./config/database");

connectDB();

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
