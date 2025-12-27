

import fs from "fs";

const trivia = [];
let id = 1;

const templates = [
anime => ({
question: `Who is the main protagonist of ${anime}?`,
answer: "Unknown"
}),
anime => ({
question: `What genre does ${anime} belong to?`,
answer: "Shounen"
}),
anime => ({
question: `Is ${anime} a series or a movie?`,
answer: "Series"
})
];

const animeList = [
"Naruto",
"One Piece",
"Attack on Titan",
"Demon Slayer",
"Jujutsu Kaisen",
"Bleach",
"Dragon Ball"
];

animeList.forEach(anime => {
templates.forEach(t => {
trivia.push({
id: id++,
anime,
difficulty: "easy",
...t(anime)
});
});
});

fs.writeFileSync(
"mixed.json",
JSON.stringify(trivia, null, 2)
);

console.log("✅ Trivia generated:", trivia.length);

