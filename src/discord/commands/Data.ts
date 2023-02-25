import { EmbedAuthorOptions } from "discord.js";

class Data {
  mainAuthor: EmbedAuthorOptions = {
    name: "Hatsune Miku",
    iconURL: "https://cdn.discordapp.com/avatars/1069652873933242408/e5c316b816b3229bfe5368c9c70073b5.webp",
    url: "https://miku.tempera.dev",
  };
}

const data = new Data();

export default data as Data;
