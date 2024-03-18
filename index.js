const express = require("express");
const connection = require("./common/connection");
const router = require("./routes/userRoutes");

require("dotenv").config();

const app = express();
app.use(express.json());

connection();
app.use(router);

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} ....🚀`);
});
