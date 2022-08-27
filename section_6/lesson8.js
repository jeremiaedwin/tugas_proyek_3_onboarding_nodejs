// karena tidak bisa akses geocoding saya menggunakan api lain

const request = require('request')
var command = process.argv[2]
command = parseInt(command)

const apiURL = 'https://jsonplaceholder.typicode.com/todos/'+command
request({ url: apiURL, json: true }, (error, response) => {
    const todos = (id, callback) =>{
        setTimeout(() => {
            const data = {
                title: response.body.title,
                completed: response.body.completed
            }
            callback(data)
        }, 2000)
    }

    todos(response.body.id, (data) => {
        console.log(data)
    })
})