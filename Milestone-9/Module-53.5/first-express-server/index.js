const express = require('express')
const app = express()
const port = 5000

app.get('/' , (req,res)=>{
    res.send("heyy world , how are you running")
})

app.listen(port , ()=>{
    console.log(`app listening on port : ${port}`);
})