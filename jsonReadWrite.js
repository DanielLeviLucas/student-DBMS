const fs = require("fs");

exports.jsonRead = () => {
  try {
    const dataBuffer = fs.readFileSync("studentDB.json");
    const jsonData = dataBuffer.toString();
    return JSON.parse(jsonData);
  } catch (error) {
    return [];
  }
};

exports.jsonWrite = (obj) => {
  const jsonData = JSON.stringify(obj);
  fs.writeFileSync("studentDB.json", jsonData);
};
