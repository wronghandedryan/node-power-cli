#! /usr/bin/env node
// will tell shell enviroment which program it needs execute this, in our case it's node
// always run your code in strict mode
"use strict";

console.log(`My first Node CLI app 🎉`);

// make a list of frequently used binaries
const frequentlyUsedBinaries = [
  "iterm2",
  "visual-studio-code",
  "google-chrome",
  "zsh",
  "whatsapp",
  "spectacle",
  "spotify",
  "slack",
  "github",
  "node",
  "grammarly",
  "figma"
];

// require the enquirer module
const { MultiSelect } = require("enquirer");

// create a new multi select prompt
const multiSelectPrompt = new MultiSelect({
  name: "value",
  message: "Select all the binaries that you want to install",
  choices: frequentlyUsedBinaries
});

// run the prompt and handle the answer
multiSelectPrompt
  .run()
  .then(binaries => {
    console.log("Selected binaries:", binaries);
  })
    .catch(console.error);

    // require utility tools and child_process exec to execute CLI commands
const util = require("util");
const exec = util.promisify(require("child_process").exec);

// define a async function execute commands
async function executeCommands(CommandLineString) {
  const { stdout, stderr } = await exec(CommandLineString);
  console.log("Standard output:", stdout);
  console.log("Standard error:", stderr);
}

// create command line string
function getCommandLIneString(binaries) {
  return binaries
    .map(binary => {
      return `brew cask install ${binary} &&`;
    })
    .join()
    .replace(/,/g, " ")
    .slice(0, -3);
}

// run the prompt and handle the answer
multiSelectPrompt
  .run()
  .then(binaries => {
    console.log("Selected binaries:", binaries);
    console.log("Installing them all");
    executeCommands(getCommandLIneString(binaries));
  })
  .catch(console.error);