// Dependencies imported
const generateMarkdown = require('./utils/generateMarkdown')
const inquirer = require('inquirer')
const fs = require('fs')
// The array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'projectname'

    },
    {
        type: 'input',
        message: 'Write a description of your project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What is the name of your GitHub account?',
        name: 'accountname'
    },
    {
        type: 'input',
        message: 'What is the name of your GitHub repo?',
        name: 'reponame'
    }
];

// The function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Success! Your README.md file has been generated")
    });
};


// TODO: The function to initialize app
async function init() {
    const userReplies = await inquirer.prompt(questions)
    console.log(userReplies)
    const markdown = await generateMarkdown(userReplies)
    writeToFile('resultREADME.md', markdown)
}

// Function call to initialize app
init();
