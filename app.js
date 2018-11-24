console.log("hii")
var express = require('express')
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/static', express.static(__dirname + '/client'));
var app = express()
var port = 3000;
// app.use('/app.js');
app.use('/app.js', function (req, res, next) {
  next();
});




app.get('/', function(req, res){
  res.send('hello world');
});



app.listen(3000);

