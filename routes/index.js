const express = require('express')
const router = express.Router()

const Url = require('../models/Url')

// @route   GET /:code
// @desc    Redirect to long/original URL

router.get('/:code', async (req,res) => {
    // Look for the register corresponding to the code
    // if found redirect to long URL
    try {
        const url = await Url.findOne({
            urlCode: req.params.code
        })

        if(url){
            return res.redirect(url.longUrl)
        }else{
            return res.status(404).json('Not URL found')
        }
    } catch (error) {
        console.log('error redirecting', error)
        res.status(500).json('Server error')
    }
})
module.exports = router