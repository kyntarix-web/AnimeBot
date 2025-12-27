import { data } from "dataLoader.js";
import { animeEmbed } from "embeds.js";
import { games } from "gameState.js";

export default {
name: "guesschar",
execute(message) {
if (games.get(message.guild.id)?.active)
return message.reply("⚠️ A game is already running.");

const char =
data.characters[
Math.floor(Math.random() * data.characters.length)
];

const embed = animeEmbed(
"Guess the Character",
"Type the answer in chat. You have **20 seconds**."
).setImage(char.image);

message.channel.send({ embeds: [embed] });

games.set(message.guild.id, {
active: true,
answer: char.name.toLowerCase(),
aliases: char.aliases.map(a => a.toLowerCase()),
timeout: setTimeout(() => {
games.delete(message.guild.id);
message.channel.send(
`⏱️ Time’s up. It was **${char.name}** (${char.anime})`
);
}, 20000)
});
}
};