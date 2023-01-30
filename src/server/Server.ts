import express, { Express, Request, Response } from "express";

export class Server {
  readonly app: Express = express();
  readonly port = process.env.PORT;

  constructor() {
    this.app.get("/", (req: Request, res: Response) => {
      res.send("Hello World!");
    });

    this.app.listen(this.port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${this.port}`);
    });
  }
}
