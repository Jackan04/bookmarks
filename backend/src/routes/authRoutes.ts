import { Router } from "express";
import { register, login, getMe } from "../controllers/authController";

const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/me", getMe);

export default authRouter;
