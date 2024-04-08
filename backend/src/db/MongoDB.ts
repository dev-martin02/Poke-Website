import dotenv from "dotenv";
import mongoose from "mongoose";
import { getEnvVariable } from "../utils/environment";

dotenv.config();

const MONGO_DB_KEY = getEnvVariable("MONGO_DB_KEY");

export async function ConnectToMongoDB() {
  if (!MONGO_DB_KEY) return 1
  try {
    await mongoose.connect(MONGO_DB_KEY);
    console.log("MongoDB connection successful!");
  } catch (error: any) {
    console.error("Error starting server:", error.message);
  }
}