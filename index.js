'use strict';
exports.main_handler = async (event, context) => {
    console.log(event["Message"]);
    // require("./dlcode.js")
    for (const scriptname of event["Message"].split("&")) {
      console.log(`开始执行 ${scriptname}`);
      const scrippath = `./${scriptname}`
      delete require.cache[require.resolve(scrippath)];
      require(scrippath)
    }
};