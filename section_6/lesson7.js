// karena tidak bisa akses geocoding saya menggunakan api lain

const request = require('request')
var command = process.argv[2]
command = parseInt(command)

const apiURL = 'https://jsonplaceholder.typicode.com/todos/'+command
request({ url: apiURL, json: true }, (error, response) => {
    if(error) {
        console.log('Unable to connect to location services!')
    } else if (response.body.title === undefined) {
        console.log('Todos not found')
    } else {
        console.log(
            'TODOS \n', 
            'user_id : ' + response.body.userId + '\n',
            'id : ' + response.body.id + '\n',
            'todos : ' + response.body.title + '\n',
            'completed : ' + response.body.completed
            )
    }
})