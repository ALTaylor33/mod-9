// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'Title of App?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Brief discription?',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Motivation for the project?',
    name: 'motivation',
  },
  {
    type: 'input',
    message: 'Why did you build this project?',
    name: 'reason',
  },
  {
    type: 'input',
    message: 'What problems does it solve?',
    name: 'solve',
  },
  {
    type: 'input',
    message: 'What did you learn?',
    name: 'learn',
  },
  {
    type: 'input',
    message: 'What makes your project stand out?',
    name: 'standout',
  },
  {
    type: 'input',
    message: 'How do you install/run the app?',
    name: 'install',
  },
  {
    type: 'input',
    message: 'Any collaborators? (if no type none)',
    name: 'collaborators',
  },
  {
    type: 'input',
    message: 'Any third-party assets used? (If no type none)',
    name: 'assets',
  },
  {
    type: 'input',
    message: 'Any tutorials followed? (if no type none)',
    name: 'tutorials',
  },
  {
    type: 'list',
    message: 'What license do you want to use?',
    name: 'license',
    choices: [
      'MIT License',
      'Apache License 2.0',
      'GPLv3',
      'None'
    ]
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log('README file created successfully!');
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    const readMe = `
# ${responses.title}

## ${responses.description}
- Motivation for this app: ${responses.motivation}
- Why did I build this app: ${responses.reason}
- What does it solve: ${responses.solve}
- What I learned: ${responses.learn}
- What makes it stand out: ${responses.standout}

## Installation
${responses.install}

## Credits
- Collaborators: ${responses.collaborators} 
- Third-party assets used: ${responses.assets}
- Tutorials used: ${responses.tutorials}

## License
This project is licensed under the ${responses.license} License.
${generateMarkdown(responses.license)}
`;

    writeToFile('README.md', readMe);
  });
}

// Function call to initialize app
init();