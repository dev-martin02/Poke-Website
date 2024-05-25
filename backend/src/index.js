import dotenv from "dotenv";
import express from "express";
import { ConnectToMongoDB } from "./db/MongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

async function RunServer() {
  app.get("/", (_, res) => {
    res.send("Martin Server Dev");
  });

  app.listen(PORT, () => console.log('[server]: Server is running at http://localhost:' + PORT));

  await ConnectToMongoDB()
}

RunServer()