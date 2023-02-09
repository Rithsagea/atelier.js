import { Bot } from "./discord/Bot";
import { env } from "./Environment";
import { Notion } from "./notion/Notion";
import { Server } from "./server/Server";

const server = new Server();
const bot = new Bot();
const notion = new Notion();

// server.listen();
// bot.login();
