import { EmbedBuilder } from "discord.js";

export function animeEmbed(title, description) {
return new EmbedBuilder()
.setColor(0xff4757)
.setTitle(`🎌 ${title}`)
.setDescription(description)
.setFooter({ text: "Anime Bot • ~anime help" });
}


