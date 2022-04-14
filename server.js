const express = require('express')
const connectDB = require('./config/db')
const Url = require('./models/Url')

const app = express()

// Connect to DB
connectDB()

app.set('view engine', 'ejs') // Using EJS as the view engine
app.use(express.json({ extended: false})) // Accept JSON data in our API 


// Define routes
app.use('/', require('./routes/index'))
app.use('/api/url', require('./routes/url'))

const PORT = 3000
app.get('/', async (req,res)=> {
    try {
        const shortUrls = await Url.find()
        res.render('index', { shortUrls: shortUrls})
    } catch (error) {
        console.log('ERROR',error)
    }
})


app.listen(process.env.PORT || PORT, () => console.log(`Server running on port ${PORT}`)) // Default port