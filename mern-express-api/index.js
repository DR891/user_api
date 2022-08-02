const express = require("express");
var cors = require('cors')
var app = express();
app.use(cors())
app.use(express.static(__dirname + "/public"));
var mongohelper = require('./mongohelper')

app.get ('/user/findall', async (req,res)=>{
    let response = await mongohelper.findAll("user",(data)=>{
        res.json(data)
})
})

app.get('/user/add', (req,res)=>{
    mongohelper.add("user",req.query)  //user is the collection name referenced in mongohelper, it was the collectioname param that was passed 
    res.json('customer successfully added ')
})

app.get('/user/update',(req,res)=>{
    mongohelper.update("user",{username:req.query.username}, req.query)
    res.json('updated customer')
})

app.listen(8080, () => {
    console.log("app started");
  });