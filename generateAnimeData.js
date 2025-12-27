import fs from "fs";

const trivia = []
let id = 1;

for (let anime of animes) {
    for (let i = 0; i < 1500; i++) {
        trivia.push({
            id: id++,
            anime,
            difficulty: ["easy", "medium", "hard"] [i%3],
            question: `Question ${i+1} from ${anime}?`,
            answer: `Answer ${i+1}' from ${anime}`,
        });
    }
        }

        fs.writeFileSync("trivia.json", JSON.stringify(trivia, null, 2));

        console.log("Trivia data has been written to trivia.json", trivia.length, "trivia questions");