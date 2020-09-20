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
  
    