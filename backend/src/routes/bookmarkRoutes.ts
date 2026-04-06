import { Router } from "express";
import { getBookmarks } from "../controllers/bookmarkController";

const bookmarkRouter = Router();

bookmarkRouter.get("/", getBookmarks);

export default bookmarkRouter;
