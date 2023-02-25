import { Client, Interaction, REST, Routes } from "discord.js";
import { Command } from "./commands/Command";
import { SprintCommand } from "./commands/SprintCommand";

const client = new Client({
  intents: [],
});

const rest = new REST({ version: "9" }).setToken(
  process.env.BOT_TOKEN as string
);

const commands: Command[] = [SprintCommand];

client.on("ready", async () => {
  if (!client.user || !client.application) return;
  console.log(`Logged in as ${client.user.tag}!`);

  let commandData = commands.map((cmd) => cmd.data.toJSON());
  await rest.put(
    Routes.applicationGuildCommands(
      client.application.id,
      process.env.GUILD_ID as string
    ),
    { body: commandData }
  );

  console.log(`Registered ${commandData.length} commands!`);
});

client.on("interactionCreate", async (interaction: Interaction) => {
  if (interaction.isCommand()) {
    const command = commands.find(
      (command) => command.data.name === interaction.commandName
    );
    if (command) {
      try {
        await command.execute(interaction);
      } catch (error) {
        console.error(error);
        await interaction.reply({
          content: "There was an error while executing this command!",
          ephemeral: true,
        });
      }
    }
  }
});

export { client as DiscordClient };
