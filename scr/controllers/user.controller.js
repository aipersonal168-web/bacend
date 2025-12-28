import { findUserByname } from "../models/user.model.js";

export const loginUser = async (req, res) => {
  const { name, pass,role } = req.body;
  console.log("Request body:", req.body);
  

  try {
    const user = await findUserByname(name,role);

    // console.log("Found user:", user);

    if (!user) {
      return res.status(401).json({ message: "Invalid name or password" });
    }
    // get data from images in table user
    res.json({ message: "Login successful", user });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
