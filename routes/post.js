const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin = require('../middleware/requireLogin')

router.post('/createPost', requireLogin,(req,res)=>{
    const {title,body} = req.body
    if(!title||!body){
        return res.status(422).json({error:"Please add all the fields"})
    }
    
    // const post = new post({
    //     title,
    //     body,
    // })
})


module.exports = router