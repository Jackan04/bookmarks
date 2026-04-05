import jwt from "jsonwebtoken";
import "dotenv/config";

const secret = process.env.TOKEN_SECRET;
if (!secret) throw new Error("TOKEN_SECRET is not set");

export function signToken(userId: string) {
  return jwt.sign({ sub: userId }, secret, {
    expiresIn: process.env.JWT_EXPIRES_IN ?? "7d",
  });
}
