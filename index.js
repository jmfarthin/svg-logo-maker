const fs = require('fs');
const inquirer = require('inquirer');
const maxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
const shape = require('./lib/shape')
inquirer.registerPrompt('maxlength-input', maxLengthInputPrompt)

const questions = [
    {
        type: 'maxlength-input',
        name: 'text',
        message: 'Enter three characters for your logo text:',
        maxLength: 3,
    },
    {
        type: 'input',
        name: 'color',
        message: 'Enter a color for your logo text:'
    },
    {
        type: 'input',
        name: 'fillColor',
        message: 'Enter a color for your logo shape:'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape for your logo:',
        choices: ['triangle', 'square', 'circle']
    }

]



inquirer
    .prompt(questions).then((res) => {
        console.log(res);
        fs.writeFile('examples/newLogo.svg', shape.newLogo(res), err => {
            err ? console.log(err) : console.log('created svg file')
        })
    });
