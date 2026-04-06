import { Request, Response, NextFunction } from "express";
import prisma from "../lib/prisma";
import AppError from "../types/AppError";
import { IdParam } from "../types/requests";

export async function deleteUser(
  req: Request<IdParam>,
  res: Response,
  next: NextFunction,
) {
  const { id } = req.params;

  try {
    const user = await prisma.user.delete({
      where: {
        id: id,
      },
    });

    if (!user) {
      return next(new AppError(`User with the ID ${id} does not exist.`, 404));
    }

    res.send(200).json(user);
  } catch (error) {
    return next(new AppError(`Failed to delete user with ID ${id}`, 500));
  }
}
