const User = require("../models/User");

exports.registerUser = async (req, res) => {
  try {
    const { username, email, role } = req.body;

    if (!username || !email || !role) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const user = new User({ username, email, role });
    await user.save();
    res.status(201).json({ message: "User registered", user });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ message: "Email already exists." });
    }
    res.status(500).json({ message: "Server error", error: err.message });
  }
};