var mongoose  = require('mongoose'),
	urlString = process.env.MONGO_URI || 'mongodb://murilo:lilo0202@ds023593.mlab.com:23593/bubble';

mongoose.connect(urlString.toString(), function(err, res) {
	if(err){
		console.log('Nao foi possivel conectar a:' + urlString + ' com o erro: ' + err);
	}else{
		console.log('Conectado a ' + urlString);
	}
});