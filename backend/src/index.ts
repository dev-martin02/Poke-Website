import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import { ConnectToMongoDB } from "./db/MongoDB";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3000;

async function RunServer() {
  app.get("/", (_: Request, res: Response) => {
    res.send("Martin Server");
  });

  app.listen(PORT, () => console.log(`[server]: Server is running at http://localhost:${PORT}`));

  await ConnectToMongoDB()
}

RunServer()