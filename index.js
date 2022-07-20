const inquirer = require("inquirer");
const fs = require("fs");
const page = require('./src/generateHTML');

let teamArray = [];

const engineerQuestions = [
  {
    type: 'input',
    message: 'What is your name?',
    name: 'name'
  },
  {
    type: 'input',
    message: 'What is your employee ID?',
    name: 'ID'
  },
  {
    type: 'input',
    message: 'What is your email?',
    name: 'email'
  },
  {
    type: 'input',
    message:'What is your GitHub?',
    name: 'GitHub'
  }
];
const internQuestions = [
  {
    type: 'input',
    message: 'What is your name?',
    name: 'name'
  },
  {
    type: 'input',
    message: 'What is your employee ID?',
    name: 'ID'
  },
  {
    type: 'input',
    message: 'What is your email?',
    name: 'email'
  },
  {
    type: 'input',
    message: 'What is your university name?',
    name: 'school'
  }
];
const managerQuestions = [
  {
    type: 'input',
    message: 'What is your name?',
    name: 'name'
  },
  {
    type: 'input',
    message: 'What is your employee ID?',
    name: 'ID'
  },
  {
    type: 'input',
    message: 'What is your email?',
    name: 'email'
  },
  {
    type: 'input',
    message: 'What office number are you located in?',
    name: 'office'
  }
];

function init () {inquierer
  .prompt(managerQuestions)
  .then((data) => teamArray.push(data)
)};

function makeHTML () {
  fs.writeFile('index.html', page(data))
}

