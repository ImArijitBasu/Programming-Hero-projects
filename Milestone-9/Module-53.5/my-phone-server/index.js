const express = require('express') //importing express
const phones = require('./phones.json')
const cors = require('cors')
const app = express()
const port = 5000
app.use(cors())
app.get('/' , (req, res) =>{
    res.send("my phone ")
})
app.get('/phones' , (req , res) =>{
    res.send(phones)
})
app.get('/phones/:id' , (req, res)=>{
    const id =parseInt(req.params.id);
    console.log(id);
    // res.send(id)
    const phone = phones.find(phone => phone.id === id) || {};
    res.send(phone)
})

app.listen(port , () =>{
    console.log(port);
})