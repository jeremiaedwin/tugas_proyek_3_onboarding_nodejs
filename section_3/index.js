// importing node.js core module
const fs = require('fs')
fs.writeFileSync('notes.txt', 'I live in Philadelphia');

// importing own files
const checkUtils = require('./utils.js')
checkUtils()


// importing npm module
const validator = require('validator')
console.log(validator.isURL('https://mead.io'))

const chalk = require('chalk');
console.log(chalk.blue('Hello world!'));


console.log("Hello, Node.js!")