const express = require('express')
const app = express()

app.set('view engine', 'ejs') // Using EJS as the view engine

app.get('/', (req,res)=> {
    res.render('index')
})

app.listen(process.env.PORT || 3000) // Default port