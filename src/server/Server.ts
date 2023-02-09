import express, { Express, Request, Response } from "express";

export class Server {
  readonly app = express();
  readonly port = process.env.PORT;

  constructor() {
    this.app.get("/", (req: Request, res: Response) => {
      res.send("Hello World!");
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(
        `⚡️[server]: Server is running at http://localhost:${this.port}`
      );
    });
  }
}
