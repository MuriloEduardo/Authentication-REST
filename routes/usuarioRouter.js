var express 		  = require('express'),
	router 			  = express.Router(),
	usuarioController = require('../controllers/usuarioController');

function pegarToken(req, res, next) {
	var header = req.headers['authorization'];

	if(typeof header !== 'undefined'){
		req.token = header;
		next();
	}else{
		res.sendStatus(403);
	}
}

router.post('/cadastrar', function(req, res) {
	var email = req.body.email,
		senha = req.body.senha;

	usuarioController.save(email, senha, function(resp) {
		res.json(resp);
	});
});

router.post('/login', function(req, res) {
	var email = req.body.email,
		senha = req.body.senha;

	usuarioController.login(email, senha, function(resp) {
		res.json(resp);
	});
});

router.get('/listar', pegarToken, function(req, res) {
	var token = req.token;
	usuarioController.list(token, function(resp) {
		res.json(resp);
	});
});

module.exports = router;