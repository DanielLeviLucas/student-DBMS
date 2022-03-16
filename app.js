const readline = require("readline-sync");
const chalk = require("chalk");
const CRUD = require("./CRUD.js");

function printMenu() {
  process.stdout.write(
    chalk.bgBlue.underline.black(`\n| ----------------------------------- |`)
  );

  process.stdout.write(
    chalk.bgWhite.underline.white(`\n| ----------------------------------- |`)
  );

  process.stdout.write(
    chalk.bgWhite.black(`
| Add    - To create a new user       |
| Remove - To remove an existing user |
| Update - To update an existing user |
| Show   - To show all existing users |
| Exit   - To exit the menu           |

`)
  );
}

while (true) {
  printMenu();

  let option = readline.question(chalk.white(`Enter you option : `));
  process.stdout.write("\n");

  switch (option.toLowerCase()) {
    case "add":
      CRUD.createStudentData();
      break;

    case "remove":
      let id = readline.question(
        chalk.white(`Enter studentID to remove record : `)
      );
      CRUD.removeStudentRecord(id);
      break;

    case "update":
      console.log(chalk.bgGreen.black("W.I.P\nupdate an existing user"));
      break;

    case "show":
      console.log(chalk.black.bgGreen("Listing all records"));
      CRUD.showAllStudentData();
      break;

    case "exit":
      console.log(chalk.bgGreen.black("Exited from menu"));
      process.exit();

    default:
      console.log(chalk.bgRed.white("Option invalid"));
  }
}
