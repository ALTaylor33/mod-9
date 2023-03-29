// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT License") {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (license === "Apache License 2.0") {
    return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
  } else if (license === "GPLv3") {
    return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  } else if (license === "MIT License") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "Apache License 2.0") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "GPLv3") {
    return "https://opensource.org/licenses/GPL-3.0";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license === "None")  {
      return "";
    }
  
    return `## License
  
    This project is licensed under the ${license} license.
    ${renderLicenseLink(license)}
    `;
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
    const licenseSection = renderLicenseSection(data.license);
  if (data.license === "None") {
    licenseSection = "";
  }

  return `# ${data.title}

${licenseBadge}
`;
}


module.exports = generateMarkdown;
