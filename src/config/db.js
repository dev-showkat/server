import { connect } from "mongoose";
import { config } from "dotenv";

config();

export const connectDB = async () => {
  try {
    await connect(process.env.MONGO_URI);
    console.log("MongoDB connected succssfully!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
