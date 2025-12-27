import { setGuild } from "guildConfig.js";

export default {
name: "setchannel",
execute(message) {
if (!message.member.permissions.has("Administrator")) {
return message.reply("❌ Admins only.");
}

setGuild(message.guild.id, { gameChannel: message.channel.id });
message.reply("✅ This channel is now the anime game channel.");
}
};
