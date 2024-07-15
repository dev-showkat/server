import { Router } from "express";
import { isAuthorised } from "../middleware/authMiddleware.js";
import {
  registerUser,
  loginUser,
  getUserProfile,
  logoutUser,
} from "../controllers/userController.js";

export const userRoutes = Router();

userRoutes.post("/register", registerUser);
userRoutes.post("/login", loginUser);
userRoutes.get("/profile", isAuthorised, getUserProfile);
userRoutes.post("/logout", logoutUser);

export default userRoutes;
