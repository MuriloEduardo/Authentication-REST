var app = require('./config/server_config'),
	db  = require('./config/db_config.js'),
	usuario = require('./routes/usuarioRouter');

app.get('/', function(req, res) {
	res.json({author: 'Murilo Eduardo dos Santos'});
});

app.use('/usuarios', usuario);