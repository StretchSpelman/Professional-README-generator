// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [ 
    {
    type: 'input',
    name: 'title',
    message: 'Enter the project title:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'What was your motivation and why did you build this project?:',
  },
  {
    type: 'input',
    name: 'description2',
    message: 'What problems does this project solve?:',
  },
  {
    type: 'input',
    name: 'learn',
    message: 'What did you learn?:',
  },
  {
    type: 'input',
    name: 'Contribution',
    message: 'Enter the contributions:',
  },
  {
    type: 'input',
    name: 'liscense',
    message: 'Enter the liscenses:',
  },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
  }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
      const generatedMarkdown = generateMarkdown(answers);
      writeToFile('README.md', generatedMarkdown);
    });
  }

// Function call to initialize app
init();
