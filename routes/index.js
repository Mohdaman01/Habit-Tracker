const express = require('express');
const Router = express.Router();

Router.get('/',(req,res)=>{
    res.send('<h1>Server is up and running! </h1>');
})

module.exports = Router;