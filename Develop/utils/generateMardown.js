// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLiscenseBadge(liscense) {
    // Define a mapping of licenses to their respective badge URLs
    const liscenseBadges = {
      'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
      'Apache 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    };
  
    // Check if the selected license exists in the mapping, and return the badge URL
    if (liscense && liscenseBadges[liscense]) {
      return `![License Badge](${liscenseBadges[liscense]})`;
    } else {
      return ''; // Return an empty string if no license or an unrecognized license is provided
    }
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLiscenseLink(liscense) {
    // Define a mapping of licenses to their respective links
    const liscenseLinks = {
      'MIT': 'https://opensource.org/licenses/MIT',
      'Apache 2.0': 'https://www.apache.org/licenses/LICENSE-2.0',
      // I can add more licenses and their links as needed
    };
    if (liscense && licenseLinks[liscense]) {
      return `License Link: [${liscense}](${liscenseLinks[liscense]})`;
    } else {
      return ''; // Return an empty string if no license or an unrecognized license is provided
    }
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLiscenseSection(liscense) {
    // Define a mapping of license text or descriptions
    const liscenseSections = {
      'MIT': 'This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).',
      'Apache 2.0': 'This project is licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).',
    };
  
    // Check if the selected license exists in the mapping, and return the license section
    if (liscense && liscenseSections[liscense]) {
      return liscenseSections[liscense];
    } else {
      return ''; // Return an empty string if no license or an unrecognized license is provided
    }
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `
  # ${data.title}
  
  ## Description
  ${data.description}
  
  ## What problems does this solve?
  ${data.description2}
  
  ## What did you learn from this project?
  ${data.learn}
  
  ## Contribution
  ${data.Contribution}
  
  ## License
  ${data.license}
    `;
  }
  
  module.exports = generateMarkdown;