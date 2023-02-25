import dotenv from "dotenv";

dotenv.config();

import { DiscordClient } from "./discord/Bot";
import { Notion } from "./notion/Notion";
import { Server } from "./server/Server";

const server = new Server();

// server.listen();
DiscordClient.login(process.env.BOT_TOKEN as string);