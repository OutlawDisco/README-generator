const fs = require("fs");
const inquirer = require("inquirer");

const generateMD = ({
  name,
  email,
  projectName,
  description,
  license,
  installation,
  tests,
  usage,
  contribute,
}) =>
  `# ${projectName}
By ${name}
email:${email}
## Description

${description} Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${installation}

## Usage

${usage}


add a screenshot

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## ${license}


---

## Features

If your project has a lot of features, list them here.

## How to Contribute

${contribute}

## Tests

${tests}`;

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your username?",
      name: "name",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "project name?",
      name: "projectName",
    },
    {
      type: "input",
      message: "Please write a short description of your project",
      name: "description",
    },
    {
      type: "list",
      message: "What kind of license should your project have?",
      name: "license",
      choices: ["MIT", "Apache 2.0", "other"],
    },
    {
      type: "input",
      message: "What command should be run to install dependencies?",
      default: "npm i",
      name: "installation",
    },
    {
      type: "input",
      message: "What command should be run to run tests?",
      default: "npm test",
      name: "tests",
    },
    {
      type: "input",
      message: "What does the user need to know about using the repo?",
      default: "nothing",
      name: "usage",
    },
    {
      type: "input",
      message:
        "What does the user need to know about contributing to the repo?",
      default: "please dont",
      name: "contribute",
    },
  ])
  .then((answers) => {
    const mdPageContent = generateMD(answers);

    fs.writeFile("README.md", mdPageContent, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });
