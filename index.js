var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
	PostBlueMix(5);
});

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});


function PostBlueMix(b) {
	var request = require("request");

	var options = { method: 'POST',
	url: 'http://twoplan.mybluemix.net/addExpenses',
	headers: 
	{ 'cache-control': 'no-cache' },
	body: '{\n"user": "Igor",\n"description": "some expense",\n"amount": 5\n}' };

	request(options, function (error, response, body) {
		if (error) throw new Error(error);

		console.log(body);
	});

}

