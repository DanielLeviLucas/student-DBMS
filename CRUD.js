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

function removeStudentRecord(id) {
  studentData = jsonReadWrite.jsonRead();

  const index = studentData.findIndex((element) => {
    return element.studentID === id.toUpperCase();
  });

  if (index !== -1) {
    studentData.splice(index, 1);
    console.log(chalk.bgGreen.black("Record successfully removed"));

    jsonReadWrite.jsonWrite(studentData);
  } else {
    console.log(chalk.white.bgRed("No match found"));
  }
}

function updateStudentData(id, key) {
  studentData = jsonReadWrite.jsonRead();

  const index = studentData.findIndex((element) => {
    return element.studentID === id.toUpperCase();
  });

  if (index !== -1) {
    studentData[index][key] = readline.question(
      `Enter student ${key} to update : `
    );
  } else {
    console.log(chalk.white.bgRed("No match found"));
  }
}

function showAllStudentData() {
  studentData = jsonReadWrite.jsonRead();
  console.table(studentData);
}

module.exports = {
  createStudentData: createStudentData,
  showAllStudentData: showAllStudentData,
  removeStudentRecord: removeStudentRecord,
  updateStudentData: updateStudentData,
};
