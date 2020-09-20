const chalk = require("chalk");
const figlet = require("figlet");
module.exports = {
  title: () =>
    console.log(
      `${chalk.(
        figlet.textSync("WrongHanded Scaffolding", {
          horizontalLayout: "full",
        })
      )}\n`
    ),
};
