// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


<<<<<<< HEAD
//   ## Table of Contents
//   * Installation
// * Usage
//   * License
//   * Contributing
//   * Tests
//   * Questions
=======
  ## Description
  ${data.description}
>>>>>>> feature/writefile-function

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  To install required dependecies, run the following command:
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  This project is licensed under ${data.license}

  ## Contributing
 ${data.contribute}

  ## Tests
 ${data.tests}

  ## Questions
  If you have any questions, please reach out on <a href="https://github.com/${data.github}/">GitHub</a> or you can <a href="mailto:${data.email}">E-mail me</a>.
`;
}

module.exports = generateMarkdown;
