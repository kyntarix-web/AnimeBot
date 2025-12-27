import fs from "fs";

export const data = {
trivia: [],
characters: [],
quotes: []
};

export function loadData() {
data.trivia = JSON.parse(
fs.readFileSync(".mixed.json", { encoding: "utf-8" })
);

data.characters = JSON.parse(
fs.readFileSync("characters.json", { encoding: "utf-8" })
);
data.quotes = JSON.parse(
fs.readFileSync("quotes.json", { encoding: "utf-8" }) || "[]"
);

console.log("✅ Anime data loaded");
}

setInterval(() => {
    loadData();
    console.log("🔄 Data refreshed");
}, 1000 * 60 * 10); // Refresh data every 10 minutes