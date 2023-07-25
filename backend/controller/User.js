const User = require("../models/user.model");

async function getAllUsers(req, res) {
  try {
    let user = await User.find();
    res.json(user);
  } catch (error) {
    res.json(error);
  }
}

async function getUserById(req, res) {
  const id = req.params.id;
  try {
    let user = await User.findById(id);
    res.json(user);
  } catch (error) {
    req.send(error);
    console.log(error);
  }
}

async function updateUser(req, res) {
  const id = req.params.id;
  await User.findByIdAndUpdate(id, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      console.log("User Updated : \n", docs);
    }
  });
}

async function createUser(req, res) {
  const newUser = new User(req.body);
  try {
    newUser.save();
    res.json(newUser);
  } catch (error) {
    res.send(error);
    console.log(error);
  }
}

async function deleteUserById(req, res) {
  try {
    const id = req.params.id;
    await User.findByIdAndDelete(id);

    res.send("User Delected!");
  } catch (error) {
    res.send(error);
    console.log(error);
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  updateUser,
  createUser,
  deleteUserById,
};
