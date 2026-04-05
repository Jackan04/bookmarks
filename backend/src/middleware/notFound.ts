import { Request, Response } from "express";
import "dotenv/config";

export default function notFound(req: Request, res: Response) {
  const message =
    process.env.NODE_ENV === "production"
      ? "Not Found"
      : `Route ${req.method} ${req.path} not found`;

  res.status(404).json({
    message: message,
  });
}
