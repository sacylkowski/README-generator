// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is the title of your project? (Required)"
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description of the project that includes a little bit about why you built the app, what problems does it solve, and what did you learn (Required):"
    },
    {
        type: "input",
        name: "install",
        messgae: "What is required to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use.  Include a screenshot if needed."
    },
    {
        type: "checkbox",
        name: "license",
        message: "Choose which license you used:"
    },
    {
        type: "input",
        name: "contribute",
        message: "How can others contribute to your repo?"
    },
    {
        type: "input",
        name: "tests",
        message: "Give intructions on how to run necessary tests."
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your e-mail address? (Required)"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("README.md", generateMarkdown(), err => {
        if (err) throw err;
        console.log("README is ready!  Check out README.md to see the page!")
    });
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
