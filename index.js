const fs = require("fs");
const inquirer = require("inquirer");

const generateMD = ({ name, email, projectName, description, license }) =>
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

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage

Provide instructions and examples for use. Include screenshots as needed.


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

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.`;

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
      type: "input",
      chioces: "MIT",
    },
  ])
  .then((answers) => {
    const mdPageContent = generateMD(answers);

    fs.writeFile("README.md", mdPageContent, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });
