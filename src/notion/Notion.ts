import { Client } from "@notionhq/client";
import { env } from "../Environment";

export class Notion {
  readonly client = new Client({
    auth: env.notionToken,
  });

  async getUsers() {
    return await this.client.users.list({});
  }

  async getProjects() {
    return await this.client.databases.query({
      database_id: env.notionTaskDatabaseId,
    });
  }
}
