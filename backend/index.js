import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import connectDB from "./config/connectDB.js";
import userRouter from "./routes/user.routes.js";
dotenv.config();

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "",
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(morgan());
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Quikett" });
});

app.use("/api/user", userRouter);

connectDB().then(() => {
  app.listen(PORT, async () => {
    console.log(`Server running on port`, PORT);
  });
});
