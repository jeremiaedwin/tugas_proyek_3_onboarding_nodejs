const fs = require('fs')
const yargs = require('yargs')
const addNote = () => {
    yargs.command({
        command: 'add',
        describe: 'Add a new note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: 'Note body',
                demandOption: true,
                type: 'string'
            }
        },
        handler: function(argv) {
            let title_note = argv.title
            let body_note = argv.body
            let note = JSON.stringify({title: title_note, body: body_note})
            new_note(note)
        }
    })
    
    // console.log(yargs.argv)
    yargs.parse() 
}

const new_note = (note) => {
    const data = fs.readFileSync('note.json', 'utf-8')
    const myObj = JSON.parse(data.toString())
    let new_notes = JSON.parse(note)
    myObj.push(new_notes)

    const new_note = JSON.stringify(myObj)
    fs.writeFile("note.json", new_note, (err) => {
        // Error checking
        if (err) throw err;
        console.log("New data added");
      });
    // const raw_data = []
    // const data = fs.readFileSync('notes.json', 'utf-8')
    // let json_data = JSON.parse(data)
    // raw_data.push(json_data)
    
    // let notes = JSON.parse(note)
    
    // json_data.push(notes)
    
    // fs.writeFileSync('notes.json', JSON.stringify(json_data))
    
    // Covert JavaScript object into JSON string
    // const bookJSON = JSON.stringify(note)
    
    // // Covert JSON string into object
    // const bookObject = JSON.parse(bookJSON)
    
    // fs.appendFileSync('notes.json', json_data)
    
}

module.exports = addNote
    