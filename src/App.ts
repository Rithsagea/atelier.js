import dotenv from "dotenv";
import { Bot } from "./discord/Bot";
import { Server } from "./server/Server";

dotenv.config();

const server = new Server();
const bot = new Bot();

bot.ready();
bot.login();

