const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type:'input',
        name: 'projectTitle',
        message: 'What is the title of your project?',
    },
    {
        type:'input',
        name: 'projectDescription',
        message: 'Write a brief description of your project',
    },
    {
        type:'input',
        name: 'projectInstallation',
        message: 'Describe the installation process',
    },
    {
        type:'input',
        name: 'projectUsage',
        message: 'What is the projects designated usage?',
    },
    {
        type:'input',
        name: 'projectContribution',
        message: 'Any project contributors?',
    },
    {
        type:'input',
        name: 'testInstructions',
        message: 'Describe your applications test instructions',
    },
    {
        type:'checkbox',
        choices: ["Apache", "IBM","ISC", "MIT","Mozilla"],
        name: "License",
        message:'Select the license for your application',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false;
          }
        }
      },
    {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('You need to enter a project GitHub link!');
            return false;
          }
        }
      },
      {
        type:'input',
        name: 'email',
        message: 'What is your email?',
    },
];

function writeToFile(fileName, template) {
    fs.writeFile(fileName, template, function (err) {
        console.log(fileName);

        if (err) {
            return console.log(err);
        } else {
            return console.log("Success, readme file has been created!");
        }
    })
}

function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            // console.log(answers);
            var readme = generateMarkdown(answers);
            // console.log(readme);
            writeToFile('ExampleREADME.md', readme);
        });
}

// Function call to initialize app
init();