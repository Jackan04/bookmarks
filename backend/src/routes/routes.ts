import { Router } from "express";
import authRouter from "./authRoutes";
import userRouter from "./userRoutes";
import bookmarkRouter from "./bookmarkRoutes";
import { authenticate } from "../middleware/authentication";

const router = Router();

router.use("/auth", authRouter);
router.use("/users", authenticate, userRouter);
router.use("/bookmarks", authenticate, bookmarkRouter);

export default router;
