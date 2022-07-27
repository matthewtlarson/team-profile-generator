const inquirer = require("inquirer");
const fs = require("fs");
const page = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/intern");
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
    name: 'id'
  },
  {
    type: 'input',
    message: 'What is your email?',
    name: 'email'
  },
  {
    type: 'input',
    message:'What is your GitHub?',
    name: 'github'
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
    name: 'id'
  },
  {
    type: 'input',
    message: 'What is your email?',
    name: 'email'
  },
  {
    type: 'input',
    message: 'What office number are you located in?',
    name: 'officeNumber'
  }
];

function restart () {
  inquirer.prompt({
    type: 'list',
    message: 'Do you have any other employees to add?',
    name: 'newEmployee',
    choices: ['Engineer', 'Intern', 'Exit']
  }).then((answer) => {
    console.log(answer)
  })
}

function init () {
  inquirer
  .prompt(managerQuestions)
  .then((data) => {
    let manager = new Manager(data.name, data.id, data.email, data.officeNumber)
  teamArray.push(manager)
  restart()
  }
)};

function init () {
  inquirer
  .prompt(engineerQuestions)
  .then((data) => {
    let engineer = new Engineer(data.name, data.id, data.email, data.github)
  teamArray.push(engineer)
  restart()
  }
)};

function init () {
  inquirer
  .prompt(internQuestions)
  .then((data) => {
    let intern = new Intern(data.name, data.id, data.email, data.school)
  teamArray.push(intern)
  restart()
  }
)};

function makeHTML () {
  fs.writeFile('index.html', page(data))
}

init()