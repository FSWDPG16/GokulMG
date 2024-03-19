const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    userName: {
      type: String,
      require: true,
    },
  });
  
  const userDB = mongoose.model("users", userSchema);

  module.exports = userDB;