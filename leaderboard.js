import fs from "fs";

export default {
name: "leaderboard",
execute(message) {
const users = JSON.parse(fs.readFileSync("users.json"));

const top = Object.entries(users)
.sort((a, b) => b[1].xp - a[1].xp)
.slice(0, 5)
.map(([id, u], i) => `${i + 1}. <@${id}> — ${u.xp} XP`)
.join("\n");

message.reply(`🏆 **Leaderboard**\n${top}`);
}
};

