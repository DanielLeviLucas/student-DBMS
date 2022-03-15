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

function jsonWrite(obj) {
  const jsonData = JSON.stringify(obj);
  fs.writeFileSync("studentDB.json", jsonData);
}
