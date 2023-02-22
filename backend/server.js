const app = require("./app");
const dotenv = require("dotenv").config();
const connectDB = require("./config/database");

// Handling Uncaught Exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting Down the Server due to Uncaught Exceptions`);
  process.exit(1);
});

connectDB();

const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting Down the Server due to unhandled promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});
