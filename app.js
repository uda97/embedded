var express = require('express');
var app = express();

// static resouse
app.use(express.static('public'));

// index
app.get('/index.html',function (req, res) {
    res.senFile(_dirname+"/",+"index.html");
})

// server
var server=app.listen(8081,function () {
    console.log("http://localhost:8081");
})



