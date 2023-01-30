import { Client } from "discord.js";

export class Bot {
  readonly client = new Client({
    intents: [],
  });

  constructor() {
    let client = this.client;
  }

  ready() {
    console.log("Bot is starting...");

    let client = this.client;

    client.on("ready", async () => {
      if (!client.user || !client.application) return;
      console.log(`${client.user.username} is online!`);
    });
  }

  login() {
    this.client.login(process.env.BOT_TOKEN);
  }
}
