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
