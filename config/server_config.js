var express    = require('express'),
	bodyParser = require('body-parser'),
	port       = process.env.port || 3000;

var app = module.exports = express();

app.listen(port);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Origin', 'GET. POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Origin', 'X-Request-With,content-type,Authorization');
	next();
});