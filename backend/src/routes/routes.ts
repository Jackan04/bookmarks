import { Router } from "express";
import authRouter from "./authRoutes";
import userRouter from "./userRoutes";
import bookmarkRouter from "./bookmarkRoutes";

const router = Router();

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/bookmarks", bookmarkRouter);

export default router;
