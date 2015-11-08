var express = require('express');
var http = require('http');
var app = express();
var newgoal =  0;

var igor = 30;
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


onclick="document.location+='main';return false;";

app.get('/mydata', function(request, response) {
	var url = 'http://twoplan.mybluemix.net/status?user=Igor';
	http.get(url, function(res){
		var body = '';

		res.on('data', function(chunk){
			body += chunk;
		});

		res.on('error', function (err) {
			console.log("timeout");
               var data = {
				allaccounts: 1275,
				myexpenses : 1100,
				igor : igor,
				our : igor + 1200,
				maryna : 1200,
				newgoal : newgoal
			}
         })

		res.on('end', function(){
			var r = JSON.parse(body);
			console.log("Got a response: ", r);
			varigor =  r.rows[0].value;
			var data = {
				allaccounts: 1275,
				myexpenses : 1100,
				igor : Math.round(igor,0),
				our : Math.round(igor + 1200,0),
				maryna : 1200,
				newgoal : newgoal
			}

			response.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin":"*" });
			response.write(JSON.stringify(data));
			response.end();
		});

	}).on('error', function(e){
		console.log("Got an error: ", e);
	});
});


app.get('/goals', function(request, response) {
	data = { };
	response.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin":"*" });
	response.write(JSON.stringify(data));
	response.end();
});


app.get('/saveexpense', function(request, response) {
	//PostBlueMix();
	igor = igor + 43;
	response.end();
});


app.get('/addgoal', function(request, response) {
	newgoal = 1;
	response.write(newgoal);
	response.end();
});


app.get('/confirmgoal', function(request, response) {
	newgoal = 0;
	response.write(newgoal);
	response.end();
});


app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});

function PostBlueMix(b) {
	var request = require("request");

	var options = { method: 'POST',
	url: 'http://twoplan.mybluemix.net/addExpenses',
	headers: 
	{ 'postman-token': '134ab788-11be-c622-737d-04383fd6f31d',
	'cache-control': 'no-cache' },
	body: '{\n"user": "Igor",\n"description": "some expense",\n"amount": 5\n}' };

	request(options, function (error, response, body) {
		if (error) throw new Error(error);

		console.log(body);
	});

}

