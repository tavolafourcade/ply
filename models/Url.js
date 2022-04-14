const mongoose = require('mongoose')
const shortId = require('shortid')

const urlSchema = new mongoose.Schema({
    urlCode: String,
    longUrl:{
        type: String,
        required: true
    },
    shortUrl:{
        type: String,
        required: true,
        default: shortId.generate
    },
    clicks: {
        type: Number,
        default: 0
    },
    date: {
        type: String,
        default: Date.now
    }
})

module.exports = mongoose.model('Url', urlSchema)
