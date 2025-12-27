import { Client, GatewayIntentBits, Collection } from "discord.js";
import fs from "fs";
import { loadData } from "dataLoader.js";
import { games } from "gameState.js";
import { getGuild } from "guildConfig.js";
import { addWin } from "userStats.js";
import config from "config.json" assert { type: "json" };

const client = new Client({
intents: [
GatewayIntentBits.Guilds,
GatewayIntentBits.GuildMessages,
GatewayIntentBits.MessageContent
]
});

client.commands = new Collection();
loadData();

const commandFiles = fs
.readdirSync("./src/commands")
.filter(f => f.endsWith(".js"));

for (const file of commandFiles) {
const cmd = await import(`./src/commands/${file}`);
client.commands.set(cmd.default.name, cmd.default);
}

client.on("messageCreate", async message => {
if (message.author.bot || !message.guild) return;

const guild = getGuild(message.guild.id);
if (!guild.gameChannel) return;
if (message.channel.id !== guild.gameChannel) return;

// ANSWERS (no prefix)
const game = games.get(message.guild.id);
if (game?.active) {
const guess = message.content.toLowerCase();
if (guess === game.answer || game.aliases.includes(guess)) {
clearTimeout(game.timeout);
games.delete(message.guild.id);
addWin(message.author.id);
return message.channel.send(
`🔥 Correct! ${message.author} (+10 XP)`
);
}
}

// COMMANDS
if (!message.content.startsWith(config.prefix)) return;

const args = message.content.slice(config.prefix.length).trim().split(/ +/);
const cmdName = args.shift().toLowerCase();
const command = client.commands.get(cmdName);
if (command) command.execute(message, args);
});

client.login(process.env.TOKEN);

