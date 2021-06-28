const fs = require("fs");

[ "./log.txt", "./error.txt", "./data.json" ].forEach(file => {
    try { fs.unlinkSync(file); }
    catch (error) { }
});
