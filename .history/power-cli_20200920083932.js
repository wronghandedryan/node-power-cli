var inquirer = require("inquirer");
inquirer
  .prompt([
  /* Pass your questions in here */
      "whats the name of the application your making?", "is it fullstack?
  ?)
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });
