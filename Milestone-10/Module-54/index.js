const express = require("express");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json())
const users = [
    {id : 1 , name: "arijit" , email: "afdsdf"},
    {id : 2 , name: "arijit" , email: "afdsdf"},
    {id : 3 , name: "arijit" , email: "afdsdf"},
    {id : 4 , name: "arijit" , email: "afdsdf"},
]

app.get('/users',(req,res)=>{
    res.send(users)
})
app.post('/users', (req , res) => {
    console.log('post api hitting');
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser)
})
app.listen(port , ()=>{
    console.log(port);
})