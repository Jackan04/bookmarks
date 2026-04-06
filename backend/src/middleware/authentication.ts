import passport from "passport";
import rateLimit from "express-rate-limit";

export const authenticate = passport.authenticate("jwt", { session: false });

export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { message: "Too many attempts, please try again later" },
});

export const createLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 30,
  message: { message: "Too many requests, please try again later" },
});

export const deleteLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, 
  max: 3,
  message: { message: "Too many requests, please try again later" },
});
