import fs from "fs";

const characters = [];
let id = 1;

// Example anime IDs from MyAnimeList
const animeIds = [20, 1735, 16498, 31964, 38000, 11061];

for (const animeId of animeIds) {
const res = await fetch(
`https://api.jikan.moe/v4/anime/${animeId}/characters`
);
const json = await res.json();

json.data.forEach(c => {
characters.push({
id: id++,
name: c.character.name,
anime: c.anime?.title || "Unknown",
aliases: [c.character.name.split(" ")[0].toLowerCase()],
image: c.character.images.jpg.image_url
});
});
}

fs.writeFileSync(
"characters.json",
JSON.stringify(characters, null, 2)
);

console.log("✅ Characters generated:", characters.length);


