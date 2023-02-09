import { Client, Interaction } from "discord.js";

export class Bot {
  readonly client = new Client({
    intents: [],
  });

  constructor() {
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
