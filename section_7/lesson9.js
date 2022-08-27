const path = require('path')
const express = require('express')
const hbs = require('hbs')


const app = express()
const partialsPath = path.join(__dirname, './templates/partials')
hbs.registerPartials(partialsPath)

const viewsPath = path.join(__dirname, './templates/views')
app.set('views', viewsPath)

app.set('view engine', 'hbs')
app.get('', (req, res) => {
    res.render('index', {
        title: 'My title',
        name: 'Andrew Mead'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Page not found.'
    })
})

app.listen(3000, () => {
 console.log('Server is up on port 3000.')
})