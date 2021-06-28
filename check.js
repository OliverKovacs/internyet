const http2 = require("http2");
const log = require("./log.js")(true);

module.exports = url => {
    try {
        const start = Date.now();
        return new Promise((resolve, reject) => {
            const req = http2.connect(url);
            const result = success => error => {
                    const now = Date.now();
                    resolve({
                        success,
                        url,
                        now,
                        time: now - start,
                        error: !success ? error : undefined,
                    });
                    req.destroy();
            } 
            req.on("connect", result(true));
            req.on("error", result(false));
        });
    }
    catch (error) {
        log("error", error);
        reject(error);
    }
};
