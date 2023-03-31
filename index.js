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
        maxLength: 3
    },
    {
        type: 'input',
        name: 'color',
        message: 'Enter a color for your logo text:'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape for your logo:',
        choices: ['triangle', 'square', 'circle']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color for your logo shape:'
    }
]


const prompt = inquirer.createPromptModule();

prompt(questions).then((res) => {
    console.log(res);
});
