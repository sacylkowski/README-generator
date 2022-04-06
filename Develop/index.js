// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project? (Required)",
        validate: projectTitle => {
            if (projectTitle) {
                return true;
            } else {
                console.log("Please enter the project title!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description of the project that includes a little bit about why you built the app, what problems does it solve, and what did you learn (Required):",
        validate: projectDes => {
            if (projectDes) {
                return true;
            } else {
                console.log("Please enter a description!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "install",
        message: "What is required to install your project?",
        default: "npm install"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use."
    },
    {
        type: "list",
        name: "license",
        message: "Choose which license you used:",
        choices: ["MIT", "Apache 2.0", "GNU General Public License 2.0", "BSD License 2.0"]
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
        message: "What is your e-mail address? (Required)",
        validate: userEmail => {
            if (userEmail) {
                return true;
            } else {
                console.log("Please enter your e-mail!");
                return false;
            }
        }
    },
];

// TODO: Create a function to initialize app
function init() {
    // call inqurier to run the question array
    inquirer.prompt(questions)
    .then((data) => {
        console.log(data);
        writeToFile(data);
    })

};

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("./newREADME.md", generateMarkdown(data), function(err) {
        if (err) {
            return console.error(err);
        }
        console.log("README is ready!  Check out README.md to see the page!");
    });
};

// Function call to initialize app
init();
