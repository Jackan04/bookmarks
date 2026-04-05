import express from "express";
import "dotenv/config";
import cors from "cors";
import errorHandler from "./middleware/errorHandler";
import notFound from "./middleware/notFound";
import helmet from "helmet";

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(notFound);
app.use(errorHandler);

export default app;
