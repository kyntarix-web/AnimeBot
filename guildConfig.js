import fs from "fs";
const path = "guilds.json";

export function getGuild(guildId) {
const data = JSON.parse(fs.readFileSync(path));
return data[guildId] || {};
}

export function setGuild(guildId, config) {
const data = JSON.parse(fs.readFileSync(path));
data[guildId] = { ...data[guildId], ...config };
fs.writeFileSync(path, JSON.stringify(data, null, 2));
}