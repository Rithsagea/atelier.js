import { Client, Interaction } from "discord.js";

const client = new Client({
  intents: [],
});

client.on("ready", async () => {
  if (!client.user || !client.application) return;
  console.log(`${client.user.username} is online!`);
});

export function login() {
  client.login(process.env.BOT_TOKEN);
}
