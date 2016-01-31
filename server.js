var express = require('express');
var middleware = require('./middleware.js');
var app = express();
var port = 3000;
// app.get('/',function(req, res){
// 	res.send('Hello Express!');

// });

app.use(middleware.logger);

app.get('/about',function(req,res){
	res.send('About Us!');
	
});

app.use(express.static(__dirname + '/public'));

app.listen(port,function(){
	console.log('Express server started on port '+port);
});
