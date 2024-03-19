const express = require("express");
const router = express.Router();
const multer = require("multer");

const {
  userDataCreate,
  getUserData,
  editUserData,
  deleteUserData,
  profilePic,
} = require("../controllers/userController");

const storage = multer.diskStorage({
  destination : "./public/userProfile",
  filename : function(req,file,cb){
    cb(null,file.originalname+Date.now())
  }
})

const upload = multer({
  storage:storage
})

const singleUpload = upload.single('profilePic');

router.post("/post", userDataCreate);

router.get("/get", getUserData);

router.put("/edit/:id", editUserData);

router.delete("/delete/:id", deleteUserData);

router.post("/profile", singleUpload,profilePic)

module.exports = router;
