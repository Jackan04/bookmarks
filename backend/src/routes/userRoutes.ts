import { Router } from "express";
import { deleteUser } from "../controllers/userController";
import { deleteLimiter } from "../middleware/authentication";

const userRouter = Router();

userRouter.delete("/:id", deleteLimiter, deleteUser);

export default userRouter;
