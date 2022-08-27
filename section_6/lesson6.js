// karena tidak bisa akses geocoding saya menggunakan api lain

const request = require('request')
const apiURL = 'https://jsonplaceholder.typicode.com/todos'
request({ url: apiURL, json: true }, (error, response) => {
    console.log(
        'TODOS \n', 
        'user_id : ' + response.body[0].userId + '\n',
        'id : ' + response.body[0].id + '\n',
        'todos : ' + response.body[0].title + '\n',
        'completed : ' + response.body[0].completed
        )
})