import express, { Router } from "express";
import {
  userRegisterController,
  userLoginController,
} from "../controllers/user.Controllers.js";

const userRoutes = express.Router();

userRoutes.post("/register", userRegisterController);
userRoutes.post("/login", userLoginController);

export default userRoutes;
