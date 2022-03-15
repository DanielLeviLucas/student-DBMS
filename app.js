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
| remove - To remove an existing user |
| update - To update an existing user |
| Show   - To show an existing users  |

`)
  );
}

printMenu();

let option = readline.question(chalk.white(`Enter you option : `));
process.stdout.write("\n");

switch (option.toLowerCase()) {
  case "add":
    CRUD.createStudentData();
    break;

  case "remove":
    console.log(chalk.bgGreen.black("W.I.P\nremove an existing user"));
    break;

  case "update":
    console.log(chalk.bgGreen.black("W.I.P\nupdate an existing user"));
    break;

  case "show":
    console.log(chalk.bgGreen.black("W.I.P\nshow an existing user"));
    break;

  case "exit":
    console.log(chalk.bgGreen.black("Exited from menu"));
    process.exit();

  default:
    console.log(chalk.bgRed.white("Option invalid"));
}
