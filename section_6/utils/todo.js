const request = require('request')
const todo = (id, callback) => {
    const apiURL = 'https://jsonplaceholder.typicode.com/todos/'+id
    request({ url: apiURL, json: true }, (error, response) => {
        if(error) {
            console.log('Unable to connect to location services!')
        } else if (response.body.title === undefined) {
            console.log('Todos not found')
        } else {
            callback(undefined, {
                user_id : response.body.userId,
                id : response.body.id,
                title : response.body.title,
                completed : response.body.completed
            })
        }
    })
}
module.exports = todo