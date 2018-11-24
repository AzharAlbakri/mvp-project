console.log("hii");
var express = require('express');
var bodyParser = require('body-parser');
var phones = require('./fakeData/phones').phones;
var app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/static', express.static(__dirname + '/client'));


app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/index.html');
});

app.post('/filter', function(req, res){
	// console.log(req)
  
  var brand = req.body.Brand;
  var price = req.body.Price;


  var result = [];

  for (var i = 0; i < phones.length; i++) {

  	if (brand === phones[i].brand) {
  		
  		if(phones[i].price>=price[0] && phones[i].price<=price[1]){
  			console.log(phones[i])
  			result.push(phones[i])
  		}
  	}
  }

  res.send(JSON.stringify(result));
});



app.listen(3000);