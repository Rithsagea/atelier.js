import { Client } from "@notionhq/client";

export class Notion {
  readonly notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  foo() {
    let notion = this.notion;

    (async () => {
      const listUsersResponse = await notion.users.list({});
      console.log(listUsersResponse);
    })();
  }
}
