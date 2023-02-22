const app = require("./app");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
