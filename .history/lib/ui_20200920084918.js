const chalk = require("chalk");
const figlet = require("figlet");
module.exports = {
  title: () =>
    console.log(
      `${chalk.orange(
        figlet.textSync("WrongHanded Scaffolding", {
          horizontalLayout: "full",
        })
      )}\n`
    ),
};
