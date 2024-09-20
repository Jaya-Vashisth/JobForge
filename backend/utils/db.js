import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose
      .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connected to the database");
      })
      .catch((error) => {
        console.error("Error connecting to the database", error);
      });
  } catch (error) {
    console.error("Error connecting to the database", error);
  }
};

export default connectDB;
