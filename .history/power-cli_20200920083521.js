#! /usr/bin/env node
// will tell shell envirur case it's node
// always run your code 
"use strict";

console.log(`My first No

// make a list of freque
const frequentlyUsedBina
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

// require the enquirer 
const { MultiSelect } = 

// create a new multi se
const multiSelectPrompt 
  name: "value",
  message: "Select all t
  choices: frequentlyUse
});

// run the prompt and ha
multiSelectPrompt
  .run()
  .then(binaries => {
    console.log("Selecte
  })
    .catch(console.error

    // require utility tands
const util = require("ut
const exec = util.promis

// define a async functi
async function executeCo
  const { stdout, stderr
  console.log("Standard 
  console.log("Standard 
}

// create command line s
function getCommandLIneS
  return binaries
    .map(binary => {
      return `brew cask 
    })
    .join()
    .replace(/,/g, " ")
    .slice(0, -3);
}

// run the prompt and ha
multiSelectPrompt
  .run()
  .then(binaries => {
    console.log("Selecte
    console.log("Install
    executeCommands(getC
  })
  .catch(console.error)