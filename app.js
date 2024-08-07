import express, { json } from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";
import hpp from "hpp";
import cors from "cors";
import globalErrHandler from "./controllers/errorController.js";
// Routes

const app = express();

// Allow Cross-Origin requests
app.use(cors());

// Set security HTTP headers
app.use(helmet());

// Limit request from the same API
const limiter = rateLimit({
  max: 150000,
  windowMs: 60 * 60 * 1000,
  message: "Too Many Request from this IP, please try again in an hour",
});

app.use("/api", limiter);

// Body parser, reading data from body into req.body
app.use(
  json({
    limit: "25MB",
  })
);
// Data sanitization against No sql query injection
app.use(mongoSanitize());

import mailRoutes from "./routes/mail.js";
import userRoutes from "./routes/userRoutes.js"
import bookingRoutes from './routes/bookingRoutes.js'
import AppError from "./utils/appError.js";

app.use("/api", mailRoutes);
app.use('/api/user',userRoutes)
app.use('/api/booking',bookingRoutes)

// Data sanitization against XSS(clean user input from malicious HTML code)
app.use(xss());

// Prevent parameter pollution
app.use(hpp());

// handle undefined Routes
app.use("*", (req, res, next) => {
  const err = new AppError(404, "fail", "undefined route");
  next(err, req, res, next);
});

app.use(globalErrHandler);

export default app;
