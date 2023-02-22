const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.set("strictQuery", true);
  mongoose.connect(process.env.MONGO_URI).then((data) => {
    console.log(`MongoDB Connected: ${data.connection.host}`);
  });
};

module.exports = connectDatabase;
