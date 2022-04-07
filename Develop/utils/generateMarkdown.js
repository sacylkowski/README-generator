// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "MIT") {
      selectLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    } else if (license === "Apache 2.0") {
      selectLicense = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
    } else if (license === "GNU General Public License 2.0") {
      selectLicense = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)`
    } else if (license === "BSD License 2.0") {
      selectLicense = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)`
    } else {
      selectLicense = "";
    }
    return selectLicense;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    selectLicense = `https://opensource.org/licenses/MIT`
  } else if (license === "Apache 2.0") {
    selectLicense = `https://opensource.org/licenses/Apache-2.0`
  } else if (license === "GNU General Public License 2.0") {
    selectLicense = `https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`
  } else if (license === "BSD License 2.0") {
    selectLicense = `https://opensource.org/licenses/BSD-2-Clause`
  } else {
    selectLicense = "";
  }
  return selectLicense;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge.license};


  ## Description
  ${data.description}

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
  Copyright (C) ${new Date().getFullYear()} 
  ${data.title} is licensed under ${data.license}.
  Read more about ${data.license} <a href="${renderLicenseLink.license}">here</a>

  ## Contributing
 ${data.contribute}

  ## Tests
 ${data.tests}

  ## Questions
  If you have any questions, please reach out on <a href="https://github.com/${data.github}/">GitHub</a> or you can <a href="mailto:${data.email}">E-mail me</a>.
`;
}

module.exports = generateMarkdown;
