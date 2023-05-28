const express = require('express');
const app = express();
const port = 8000;

app.use('/', require('./routes/index'));

app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    console.log(`Express Server is running on port: http://localhost:${port}`);
})