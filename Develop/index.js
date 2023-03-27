// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs")
//const generateMarkdown = require('./generateMarkdown.js')
// TODO: Create an array of questions for user input
inquirer.questions([
    {
        type: 'input',
        message: 'Title of App?',
        name: 'Title',
      },
      {
          type: 'input',
          message: 'Brief discription?',
          name: 'discription',
        },
      {
        type: 'input',
        message: 'Motivation for the project?',
        name: 'motivation',
      },
      {
        type: 'input',
        message: 'why did you build this project?',
        name: 'reason',
      },
      {
          type: 'input',
          message: 'what problems does it sovle?',
          name: 'solve',
        },
        {
            type: 'input',
            message: 'what did you learn',
            name: 'learn',
          },
          {
              type: 'input',
              message: 'What makes your project stand out?',
              name: 'standout',
            },
            {
                type: 'input',
                message: 'how do you install/run the app?',
                name: 'install',
              },
              {
                type: 'input',
                message: 'Any collaborators? (if no type none)',
                name: 'collaborators',
              },
              {
                type: 'input',
                message: 'Any third-party assest used? (If no type none)',
                name: 'assets',
              },
              {
                type: 'input',
                message: 'Any tutorials fallowed? (if no typr none)',
                name: 'tutorials',
              }
])
.then((response)=>{
readMe = `#${response.title}

##${response.discription}
-motivation for this app - ${response.motivation}
-Why did I build this app - ${response.reason}
-What does it solve - ${response.solve}
-What I learned - ${response.learn}

## Installation
-${response.install}

## Credits

-collaborators ${response.collaborators} 

-Third-party assets used ${response.assets}

-Tutorials used ${response.tutorials}

## License
${license.data}
`
// TODO: Create a function to write README file
fs.writeToFile('README.md', readMe, (err) => {
    if (err) throw err;
    console.log('README file created successfully!');
  })
}).catch((err)=>{
console.log(err)
});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
