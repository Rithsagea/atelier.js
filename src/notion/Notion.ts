import { Client } from "@notionhq/client";

const client = new Client({
  auth: process.env.NOTION_TOKEN as string,
});

const Notion = {
  getUsers: async () => {
    return await client.users.list({});
  },

  getSprints: async () => {
    return await client.databases.query({
      database_id: process.env.NOTION_DATABASE_ID as string,
      filter: {
        and: [
          {
            property: "Type",
            select: { equals: "Sprint" },
          },
          {
            or: [
              { property: "Status", status: { equals: "In Progress" } },
              { property: "Status", status: { equals: "Not Started" } },
            ],
          },
        ],
      },
      sorts: [
        {
          property: "Due Date",
          direction: "descending",
        },
      ],
    });
  },
};

export { client as NotionClient, Notion };
