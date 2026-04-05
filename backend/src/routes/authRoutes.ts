import { Router } from "express";
import { register, login, getMe } from "../controllers/authController";
import { authLimiter, authenticate } from "../utils/authentication";

const authRouter = Router();

authRouter.post("/register", authLimiter, register);
authRouter.post("/login", authLimiter, login);
authRouter.post("/me", authenticate, getMe);

export default authRouter;
