'use strinct';
var express = require('express');
var http = require('http');
var app = express();
var bodyParser = require('body-parser');

var newgoal =  0;

var igor = 30;

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


onclick="document.location+='main';return false;";

app.get('/mydata', function(request, response) {
	var data = {
				allaccounts: 1275,
				myexpenses : 1100,
				igor : Math.round(igor, 0),
				our : Math.round(igor + 1200,0),
				maryna : 1200,
				newgoal : newgoal
			}
			console.log("data get");
			response.writeHead(200, { 'Content-Type': 'application/json', "Cache-Control": "no-cache","Access-Control-Allow-Origin":"*" });
			response.write(JSON.stringify(data));
			response.end();
	//var url = 'http://twoplan.mybluemix.net/status?user=Igor';
// 	http.get(url, function(res){
// 		var body = '';

// 		res.on('data', function(chunk){
// 			body += chunk;
// 		});

// 		res.on('error', function (err) {
// 			console.log("timeout");
//                var data = {
// 				allaccounts: 1275,
// 				myexpenses : 1100,
// 				igor : igor,
// 				our : igor + 1200,
// 				maryna : 1200,
// 				newgoal : newgoal
// 			}
//          })

// 		res.on('end', function(){
// 			var r = JSON.parse(body);
// 			console.log("Got a response: ", r);
// 			igor =  r.rows[0].value;
			
// 		});

// 	}).on('error', function(e){
// 		console.log("Got an error: ", e);
// 	});
});


app.get('/goals', function(request, response) {
 	data = { };
 	response.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin":"*" });
 	response.write(JSON.stringify(data));
 	response.end();
});



app.post('/saveexpense', function(req, res){
    console.log(req.body.amount);
    igor = igor + req.body.amount;
    res.send(req.body);
}); 


app.get('/saveexpense', function(req, res){
    console.log(req);
    igor = igor + 34;
    res.send("testget");
}); 
/*
app.get('/saveexpense', function(request, response) {
	console.log(request);
	response.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin":"*" });
	response.write(JSON.stringify(data));
	igor = igor + 43;
	response.end();
});
*/

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

