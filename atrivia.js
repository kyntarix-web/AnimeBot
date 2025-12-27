import { data } from "dataLoader.js";
import { animeEmbed } from "embeds.js";
import { games } from "gameState.js";

export default {
name: "atrivia",
execute(message) {
if (games.get(message.guild.id)?.active)
return message.reply("⚠️ A game is already running.");

const q =
data.trivia[Math.floor(Math.random() * data.trivia.length)];

const embed = animeEmbed("Anime Trivia", q.question);
message.channel.send({ embeds: [embed] });

games.set(message.guild.id, {
active: true,
answer: q.answer.toLowerCase(),
aliases: [],
timeout: setTimeout(() => {
games.delete(message.guild.id);
message.channel.send(`⏱️ Time’s up! Answer: **${q.answer}**`);
}, 15000)
});
}
};