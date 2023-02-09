import dotenv from "dotenv";
import { Bot } from "./discord/Bot";
import { Notion } from "./notion/Notion";
import { Server } from "./server/Server";

dotenv.config();

const server = new Server();
const bot = new Bot();
const notion = new Notion();

notion.foo();

// server.listen();
// bot.login();