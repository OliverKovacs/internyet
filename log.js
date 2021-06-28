const fs = require("fs");
const time = () => `${new Date()}`;

module.exports = output => (file, ...content) => {
    content = content.join(" ");
    if (output) console.log(content);
    fs.appendFileSync(`./${file}.txt`, `[${time()}] ${content}\n`, "utf8");
};
