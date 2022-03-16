const readline = require("readline-sync");
const chalk = require("chalk");
const jsonReadWrite = require("./jsonReadWrite.js");

function createStudentData() {
  studentData = jsonReadWrite.jsonRead();

  const studentDB = {
    studentID: "",
    firstName: "",
    lastName: "",
    DOB: "DD-MM-YYYY",
    department: "",
  };

  Object.keys(studentDB).forEach((key) => {
    studentDB[key] = readline.question(chalk.white(`Enter student ${key} :`));
    process.stdout.write("\n");
  });
  studentData.push(studentDB);

  jsonReadWrite.jsonWrite(studentData);
}

function showAllStudentData() {
  studentData = jsonReadWrite.jsonRead();
  console.table(studentData);
}

module.exports = {
  createStudentData: createStudentData,
  showAllStudentData: showAllStudentData,
};
