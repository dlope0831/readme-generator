// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache") {
    return ('![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)')
  } else if (license === "IBM") {
    return ('![License: IBM](https://img.shields.io/badge/License-IPL_1.0-blue.svg)')
  } else if (license === "ISC") {
    return ('![License: ISC](https://img.shields.io/badge/License-IPL_1.0-blue.svg)')
  } else if (license === "MIT") {
    return ('![License: MIT](https://img.shields.io/badge/License-MIT-yellow.sv)')
  } else if (license === "Modzilla") {
      return ('![License: Modzilla](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)')
  } else if (license === "none") {
    return ("")
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache") {
  return ('![License: Apache](https://opensource.org/licenses/Apache-2.0)')
  } else if (license === "IBM") {
    return ('![License: IBM](https://opensource.org/licenses/IPL-1.0)')
  } else if (license === "ISC") {
    return ('![License: ISC](https://opensource.org/licenses/ISC)')
  } else if (license === "MIT") {
    return ('![License: MIT](https://opensource.org/licenses/MIT)')
  } else if (license === "Modzilla") {
      return ('![License: Modzilla](https://opensource.org/licenses/MPL-2.0)')
  } else if (license === "none") {
    return ("")
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var licenseLink = renderLicenseLink(license);
  if (license === "Apache" || "IBM" || "ISC" || "MIT" || "Modzilla") {
    return ("Find link here" + licenseLink)
  } else if (license === "none") {
    return ("")
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
## Table of Contents
- [Description](#projectDescription)
- [Installation](#projectInstallation)
- [Usage](#projectUsage)
- [License](#License)
- [Contributing](#projectContribution)
- [Tests](#testInstructions)
- [ReadMe Questions](#readmequestions)

## Description:${data.projectDescription}

## Installation: ${data.projectInstallation}

## Usage: ${data.projectUsage}

## License: ${renderLicenseSection(data.License[0])}

## Contributing:${data.projectContribution}

## Tests:${data.testInstructions}

## README Questions: 

- GitHub Username: ${data.github} 
- GitHub Project Link: [GitHub Profile](https://github.com/${data.github})
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;
