
const ink = require('ink@react');
const axios = require('axios');
const configstore = require('configstore');
const figlet = require('figlet')
const inquirer = require("inquirer");
inquirer
  .prompt([
  /* Pass your questions in here */
      "whats the name of the application your making?"
  ])
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
