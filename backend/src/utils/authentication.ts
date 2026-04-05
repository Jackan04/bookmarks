import passport from "passport";
import rateLimit from "express-rate-limit";

export const authenticate = passport.authenticate("jwt", { session: false });

export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { message: "Too many attempts, please try again later" },
});
