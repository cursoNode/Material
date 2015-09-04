if (!global.hasOwnProperty('db')){
	var mongoose = require('mongoose');
	var nombreBase = 'ejemploBase';
	var uristring = 'mongodb://localhost/'+nombreBase;

	mongoose.connect(uristring, function (error){
		if (error){
			console.log(error);
		} else {
			console.log('Conectado a mongo!!!!');
			global.db = {
				mongoose: mongoose,
				persona: require('../models/persona')(mongoose)
			}
		}
	})
}



