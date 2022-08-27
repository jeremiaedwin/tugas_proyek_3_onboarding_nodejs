const request = require('request')

const url = 'https://jsonplaceholder.typicode.com/posts/1'

request({ url: url }, (error, response) => {
    // Parse the response body from JSON string into JavaScript object
    const data = JSON.parse(response.body)
    // Will print the current temperature to the console
    console.log(data.title)
})