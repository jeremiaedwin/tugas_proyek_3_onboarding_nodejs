const fs = require('fs')
const yargs = require('yargs')

const chooseRemoveNote = function() {
    console.log('test')
    yargs.command({
        command: 'add',
        describe: 'Add a number note',
        builder: {
            number_note: {
                describe: 'Note Number',
                demandOption: true,
                type: 'string'
            }
        },
        handler: function(argv) {
            console.log(argv.number_note)
            let note_number = argv.number_note
            
            removeNote(parseInt(note_number))
        }
    })
    
    // console.log(yargs.argv)
    yargs.parse() 
}

const removeNote = function (input) {
    data = fs.readFileSync('note.json')
    console.log('test')
    
    data_json = JSON.parse(data)
    console.log(data_json)
    // data_json.splice(0, input)
    JSON.stringify(data_json)
    // fs.writeFile("note.json",  data_json, (err) => {
    //     // Error checking
    //     if (err) throw err;
    //     console.log("Data Deleted");
    //   });
}

module.exports = chooseRemoveNote