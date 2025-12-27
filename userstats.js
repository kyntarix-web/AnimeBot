import fs from "fs";
const path = "users.json";

export function getUser(id) {
const data = JSON.parse(fs.readFileSync(path));
if (!data[id]) {
data[id] = { xp: 0, streak: 0 };
fs.writeFileSync(path, JSON.stringify(data, null, 2));
}
return data[id];
}

export function addWin(id) {
const data = JSON.parse(fs.readFileSync(path));
if (!data[id]) data[id] = { xp: 0, streak: 0 };
data[id].xp += 10;
data[id].streak += 1;
fs.writeFileSync(path, JSON.stringify(data, null, 2));
}
