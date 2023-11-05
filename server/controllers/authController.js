const User = require("../models/userModel");
const bcrypt = require("bcrypt");


const registerCtrl = async (req, res, next) => {
  const { username, email, password } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    // return res.status(201).json({ message: "User created successfully" });
    res.sendSuccess(201, "User created successfully");
    
  } catch (error) {
    // return res.status(500).json({ error: error.message });
    // next(error);
    res.sendError(500, error.message);
  }
};

module.exports = {
  registerCtrl,
};
