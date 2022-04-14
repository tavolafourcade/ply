const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://localhost/urlShortener', {
    // Avoid deprecation warnings:
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.set('view engine', 'ejs') // Using EJS as the view engine

app.get('/', (req,res)=> {
    res.render('index')
})

app.listen(process.env.PORT || 3000) // Default port

// Creating short Url Endpoint: /shortUrls

app.post('/shortUrls', (req,res) => {
    // Connect to DB and save a new short Url
})