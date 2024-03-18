const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(
      process.env.Mongo_Url
    )
    .then(() => {
      console.log("MongoDB connected successfully.......✅");
    })
    .catch((err) => {
      console.log("Connection Error ❌:", err.message);
    });
};

module.exports = connectDB;
