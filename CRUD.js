const readline = require("readline-sync");
const chalk = require("chalk");
const { jsonRead, jsonWrite } = require("./jsonReadWrite");

function createStudentData() {
  studentData = jsonRead();

  const studentDB = {
    studentID: "",
    firstName: "",
    lastName: "",
    DOB: "",
    department: "",
  };

  Object.keys(studentDB).forEach((key) => {
    studentDB[key] = readline.question(chalk.white(`Enter student ${key} :`));
    process.stdout.write("\n");
  });

  const findDuplicate = studentData.find((element) => {
    return element.studentID === studentDB.studentID;
  });

  if (!findDuplicate) {
    studentData.push(studentDB);
    jsonWrite(studentData);

    console.log(chalk.bgGreen.black("Record successfully added"));
  } else {
    console.log(
      chalk.white.bgRed(`${studentDB.studentID} already exist in DB `)
    );
    console.table(findDuplicate);
  }
}

function removeStudentRecord(id) {
  studentData = jsonRead();

  const index = studentData.findIndex((element) => {
    return element.studentID === id.toUpperCase();
  });

  if (index !== -1) {
    studentData.splice(index, 1);
    console.log(chalk.bgGreen.black("Record successfully removed"));

    jsonWrite(studentData);
  } else {
    console.log(chalk.white.bgRed("No match found"));
  }
}

function updateStudentData(id, key) {
  studentData = jsonRead();

  const index = studentData.findIndex((element) => {
    return element.studentID === id.toUpperCase();
  });

  key = key.toLowerCase();

  if (index !== -1) {
    studentData[index][key] = readline.question(
      `Enter student ${key} to update : `
    );

    jsonWrite(studentData);
  } else {
    console.log(chalk.white.bgRed("No match found"));
  }
}

function showAllStudentData() {
  studentData = jsonRead();
  console.table(studentData);
}

module.exports = {
  createStudentData: createStudentData,
  showAllStudentData: showAllStudentData,
  removeStudentRecord: removeStudentRecord,
  updateStudentData: updateStudentData,
};
