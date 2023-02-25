import { CommandInteraction, SlashCommandSubcommandsOnlyBuilder } from "discord.js";
import { SlashCommandBuilder } from "discord.js";

export interface Command {
  data: SlashCommandBuilder | SlashCommandSubcommandsOnlyBuilder;
  execute: (interaction: CommandInteraction) => Promise<void>;
}
