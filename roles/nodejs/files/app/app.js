// Load the express module
var express = require ('express'),
app = express.createServer();

// respond to requests for / with 'hello World'
app.get('/', function(req, res){
    res.send('Hello World!');
});

// Listen on port 80 (web server)
app.listen(80);
console.log('Express server started successfully.');
