import { getUser } from "userStats.js";

export default {
name: "profile",
execute(message) {
const user = getUser(message.author.id);
message.reply(
`🎌 **Your Anime Profile**\nXP: ${user.xp}\nStreak: ${user.streak}`
);
}
};