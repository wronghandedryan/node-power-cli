const chalk = require("chalk");
const figlet = require("figlet");
module.exports = {
  title: () =>
    console.log(
      `${chalk.red(
        figlet.textSync("WrongHanded", {
            horizontalLayout: "full",
            font: "Bloody",
            verticalLayout: "full",
            width: 100,
            whitespaceBreak: true,
        })
      )}\n`
    ),
};