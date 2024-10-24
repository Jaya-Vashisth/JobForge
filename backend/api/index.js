import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoute from "../routers/userRoutes.js";
import companyRoute from "../routers/companyRoutes.js";
import jobRoute from "../routers/jobRoutes.js";
import applicationRoute from "../routers/applicationRoutes.js";
import mongoose from "mongoose";
import connectDB from "../utils/db.js";
import { User } from "../models/userModel.js";

dotenv.config({});

const app = express();
const PORT = process.env.PORT || 3000;

//middleware to parse the data in json format
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOption = {
  origin: 'https://job-forge-frontend.vercel.app',
  methods: "GET,HEAD,PUT,OPTIONS,POST,DELETE,PATCH"
  allowedHeaders: [
    "Access-Control-Allow-Headers",
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "Authorization",
    "token",
    "Access-Control-Request-Method",
    "Access-Control-Request-Headers",
    "Access-Control-Allow-Credentials",
  ],
  credentials: true,
};
app.use(cors(corsOption));



//API's routes
app.get("/", (req, res) => {
  res.send("Welcome to JobForge backend!");
});

app.get("/test-connect", async (req, res) => {
  connectDB();
  const user = await User.find();
  console.log(user);

  res.json({ message: "connection", user });
});

app.use("/api/v1/user", userRoute);
app.use("/api/vi/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

// app.use("/*", async (req, res) => {
//   res.status(404).json({
//     message: "route not defined",
//     success: false,
//   });
// });

app.listen(PORT, () => {
  // connectDB();
  console.log(`Server listening on Port ${PORT}`);
});

connectDB();
