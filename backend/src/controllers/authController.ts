import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import prisma from "../lib/prisma";
import { signToken } from "../lib/jwt";

export async function register(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { username, password } = req.body;

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

export async function login(req: Request, res: Response, next: NextFunction) {}

export async function getMe(req: Request, res: Response, next: NextFunction) {}
