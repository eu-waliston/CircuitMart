const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


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
  try {
    await User.findByIdAndUpdate(id, {
      $set: {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        datNasc: req.body.datNasc,
        role: req.body.role,
      },
    });
    let updatedUser = await User.find();
    res.json(updatedUser);
  } catch (error) {
    res.json(error);
  }
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

async function createUserWithAuth(req, res) {
  try {
    const encryptedUserPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: encryptedUserPassword,
      datNasc: req.body.datNasc,
      role: req.body.role,
    });

    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "5h",
      }
    );

    user.token = token;
    res.status(200).json(user);
  } catch (error) {
    res.json(error);
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
  createUserWithAuth
};
