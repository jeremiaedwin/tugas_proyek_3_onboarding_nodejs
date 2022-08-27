const fs = require('fs')

const listNote = () => {
    const data = fs.readFileSync('note.json', 'utf-8')
    const myObj = JSON.parse(data.toString())
    for (const obj of myObj){
        console.log('title : ' + obj.title)
        console.log('body : ' + obj.body)
        console.log('')
    }
}

module.exports = listNote