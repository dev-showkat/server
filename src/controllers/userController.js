import Joi from "joi";
import User  from "../models/User.js";
import { generateToken } from "../utils/generateToken.js";

const schema = Joi.object({
  username: Joi.string().alphanum().min(3).max(15).required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(8)
    .pattern(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/
    )
    .required(),
});

export const registerUser = async (req, res) => {
  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) return res.status(400).json({ errors: error.details });

  const { username, email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(409).json({
        message: "User already exists",
      });
    }
    const user = await User.create({
      username,
      email,
      password,
    });
    return res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (error) {
    return res.status(400).json({
      message: error?.message || "Invalid user data",
    });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }
    return res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (error) {
    return res.status(400).json({
      message: error?.message || "Invalid email or password",
    });
  }
};

export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: "User not found" });
    return res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    return res.status(400).json({
      message: error?.message || "Invalid email or password",
    });
  }
};

export const logoutUser = (req, res) => {
  return res.status(200).json({ message: "Logged out" });
};
