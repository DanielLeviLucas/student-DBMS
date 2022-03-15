const readline = require("readline-sync");
const chalk = require("chalk");
const jsonReadWrite = require("./jsonReadWrite.js");

function createStudentData() {
  studentData = jsonReadWrite.jsonRead("student.json");

  const studentDB = {
    studentID,
    firstName,
    lastName,
    DOB,
    department,
  };

  Object.keys(studentDB).forEach((key) => {
    studentDB[key] = readline.question(chalk.white(`Enter student ${key} :`));
    process.stdout.write("\n");
  });
  studentData.push(studentDB);

  jsonReadWrite.josnWrite(studentDB);
}

module.exports = {
  createStudentData: createStudentData,
};
