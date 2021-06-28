const fs = require("fs");
const check = require("./check.js");
const log = require("./log.js")(true);

const url = "https://google.com";

try {
    (async () => {
        const res = await check(url);
        fs.appendFileSync("./data.json", `${JSON.stringify(res)}, `, "utf8");
        log("log", res.success);
    })();
}
catch (error) {
    log("error", error);
}
