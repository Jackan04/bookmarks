import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import prisma from "../lib/prisma";
import { signToken } from "../lib/jwt";
import AppError from "../types/AppError";
import { LoginBody, RegisterBody } from "../types/requests";

export async function register(
  req: Request<RegisterBody>,
  res: Response,
  next: NextFunction,
) {
  const { username, password } = req.body;
  if (!username.trim() || !password.trim()) {
    return next(new AppError("Username or password is missing", 400));
  }
  
  try {
    const passwordHash = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        username: username,
        password: passwordHash,
      },
    });

    const token = signToken(user.id);
    res.status(201).json({ token });
  } catch (error) {
    return next(error);
  }
}

export async function login(
  req: Request<LoginBody>,
  res: Response,
  next: NextFunction,
) {
  const { username, password } = req.body;
  if (!username.trim() || !password.trim()) {
    return next(new AppError("Username or password is missing", 400));
  }
  try {
    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    if (!user) {
      return next(new AppError("Invalid credentials", 401));
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return next(new AppError("Invalid credentials", 401));
    }

    const token = signToken(user.id);
    return res.status(200).json({ token });
  } catch (error) {
    return next(error);
  }
}

export async function getMe(req: Request, res: Response, next: NextFunction) {
  if (!req.user) {
    return next(new AppError("User not found", 401));
  }

  return res.status(200).json(req.user);
}
