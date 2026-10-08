import bcrypt from "bcryptjs";
import userModel from "../models/userModel.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //check anything missing
    if (!name || !email || !password) {
      return res.json({
        success: false,
        message: "Name, email and password are required",
      });
    }

    // check if user already exists
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.json({ success: false, message: "User already exists" });
    }

    // hash password and create user
    const hashedPassword  = await bcrypt.hash(password, 10);
    const user = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    return res
      .status(201)
      .json({
        success: true,
        message: "User registered successfully",
        user: { id: user._id, name: user.name, email: user.email },
      });

      
  } catch (error){
    return res.status(500).json({ success: false, message: error.message });
  }
};
