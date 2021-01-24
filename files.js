const fs = require("fs");

module.exports = function files(){
  return fs.readdirSync("./src/img");
}