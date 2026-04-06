import { Request, Response, NextFunction } from "express";
import prisma from "../lib/prisma";
import AppError from "../types/AppError";

export async function getBookmarks(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const bookmarks = await prisma.bookmark.findMany({
      where: {
        userId: req.user.id,
      },
    });

    res.status(200).json(bookmarks);
  } catch (error) {
    return next(new AppError("Failed to load bookmarks", 500));
  }
}
