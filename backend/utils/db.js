import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE, {
      //these are just to get rid of warnings
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default connectDB;
