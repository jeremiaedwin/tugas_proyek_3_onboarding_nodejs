const path = require('path')
const express = require('express')
const app = express()
const viewsPath = path.join(__dirname, './templates/views')
app.set('views', viewsPath)
app.set('view engine', 'hbs')
app.get('', (req, res) => {
    res.render('index', {
        title: 'My title',
        name: 'Andrew Mead'
    })
})
app.listen(3000, () => {
 console.log('Server is up on port 3000.')
})