const request = require('request')
const url = 'https://jsonplaceholder.typicode.com/posts/1'

request({ url: url, json: true }, (error, response) => {
 console.log('User Id : ' + response.body.userId + ' \nPost Id : ' +
 response.body.id + ' \nPost Title : ' +
 response.body.title)
})