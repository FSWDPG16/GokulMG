const express = require("express");
const router = express.Router();
const {
  userDataCreate,
  getUserData,
  editUserData,
  deleteUserData,
} = require("../controllers/userController");

router.post("/post", userDataCreate);

router.get("/get", getUserData);

router.put("/edit/:id", editUserData);

router.delete("/delete/:id", deleteUserData);

module.exports = router;
