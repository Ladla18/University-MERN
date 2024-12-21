const { Signup, Login } = require("../models/usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.userSignup = async (req, res) => {
  console.log("Signup called");
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new Signup({
      username,
      email,
      password: hashedPassword,
    });
    const result = await user.save();
    res.status(201).json({ message: "User created successfully", result });
  } catch (error) {
    console.error("userController.js", " :: Error ❌ : ", error);
  }
};

module.exports.userLogin = async (req, res) => {
  console.log("Login Called");
  try {
    const { email, password } = req.body;
    const user = await Signup.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid Password" });
    }

    res.json({ message: "Login Successfull" });
  } catch (error) {
    console.error("userController.js", " :: Error ❌ : ", error);
  }
};
