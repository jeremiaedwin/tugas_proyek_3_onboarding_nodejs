const addNote = require('./lesson6.js')
const chooseRemoveNote = require('./lesson7.js')
const listNote = require('./lesson10.js')


const command = process.argv[2]

if (command === 'add') {
 console.log('Adding note!\n')
 addNote()
} else if (command === 'remove') {
 console.log('Removing note!')
 chooseRemoveNote()
} else if (command === 'list'){
    console.log('Your Notes')
    listNote()
}

