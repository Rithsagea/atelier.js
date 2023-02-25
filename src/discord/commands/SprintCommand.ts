import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { EmbedBuilder, SlashCommandBuilder } from "discord.js";
import { Notion } from "../../notion/Notion";
import { Command } from "./Command";
import Data from "./Data";

export const SprintCommand: Command = {
  data: new SlashCommandBuilder()
    .setName("sprint")
    .setDescription("Get sprint information"),
  execute: async (interaction) => {
    await interaction.deferReply();

    const sprintEmbed = new EmbedBuilder()
      .setTitle("Sprint Information")
      .setAuthor(Data.mainAuthor);

    const sprints = (await Notion.getSprints()).results as PageObjectResponse[];
    sprints.forEach((sprint) => {
      if (sprint.properties["Name"].type !== "title") return;
      if (sprint.properties["Status"].type !== "status") return;

      sprintEmbed.addFields({
        name: sprint.properties["Name"].title[0].plain_text,
        value: sprint.properties["Status"].status?.name || "Unknown",
      });
    });

    await interaction.editReply({ embeds: [sprintEmbed] });
  },
};
