import { Request, Response, NextFunction } from "express";
import AppError from "../types/AppError";

export default function errorHandler(
  err: AppError | Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const statusCode = err instanceof AppError ? err.statusCode : 500;

  res.status(statusCode).json({
    message:
      process.env.NODE_ENV === "production"
        ? "Internal server error"
        : err.message,
  });
}
