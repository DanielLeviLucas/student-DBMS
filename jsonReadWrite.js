const fs = require("fs");

function jsonRead() {
  try {
    const dataBuffer = fs.readFileSync("studentDB.json");
    const jsonData = dataBuffer.toString();
    return JSON.parse(jsonData);
  } catch (error) {
    return [];
  }
}
