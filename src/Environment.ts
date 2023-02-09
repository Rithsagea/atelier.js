import dotenv from "dotenv";

dotenv.config();

export const env = {
  port: <string>process.env.PORT,
  botToken: <string>process.env.BOT_TOKEN,
  notionToken: <string>process.env.NOTION_TOKEN,
  notionTaskDatabaseId: <string>process.env.NOTION_DATABASE_ID,
};
