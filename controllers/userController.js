const userDB = require("../models/userModels");

const userDataCreate = async (req, res) => {
  try {
    const { userName } = req.body;

    const newData = new userDB({
      userName,
    });

    const data = await newData.save();
    res.json({
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getUserData = async (req, res) => {
  try {
    const getData = await userDB.find().sort({ _id: -1 });
    res.json({
      data: getData,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const editUserData = async (req, res) => {
  try {
    const { userName } = req.body;
    const objectId = req.params.id;
    const updatedData = await userDB.findByIdAndUpdate(
      objectId,
      { userName },
      { new: true }
    );

    res.json({
      data: updatedData,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteUserData = async (req, res) => {
  try {
    const deleteDataObjectId = req.params.id;
    const deletedData = await userDB.findByIdAndDelete(deleteDataObjectId);

    res.json({
      data: deletedData,
      message: "Data deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  userDataCreate,
  getUserData,
  editUserData,
  deleteUserData,
};
