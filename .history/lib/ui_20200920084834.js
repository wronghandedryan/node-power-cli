const chalk = require("chalk");
const figlet = require("figlet");
module.exports = {
  title: () =>
    console.log(
      `${chalk.white(
        figlet.textSync("WrongHanded Scaffolding", {
          horizontalLayout: "full",
        })
      )}\n`
    ),
};
