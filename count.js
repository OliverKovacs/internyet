const fs = require("fs");

let data = fs.readFileSync("./data.json");
data = JSON.parse(`[${data.slice(0, -2)}]`);

let success = 0;
let avg = 0;

for (let i = 0; i < data.length; i++) {
    success += data[i].success;
    avg += data[i].time;
}

console.log("success:", success, "/", data.length);
console.log((100 * success / data.length).toFixed(2) + "%");
console.log("avg:", avg / data.length);
