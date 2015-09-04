var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Consultar', 
  	{ title: 'Consultar información',
  		nombre: '',
  		direccion: ''}
  		);
});

router.post('/', function(req, res){
	//recibo el nombre del usuario
	//a buscar
	console.log(req.body);
	var nombre = req.body.campoNombre;

	/*
	//Aqui va la logica para buscar
	//en la base de datos
	db.persona.findOne({usuario: nombre}, function (error, dato){
		var  datos = {
			title: 'Consultar informacion',
			nombre: '',
			direccion: ''
		};

		if (dato != null) {
			console.log(dato);
			datos.nombre = nombre;
			datos.direccion = dato.direccion;
		} else {
			console.log('No existe....');
		}

		//actualizamos la pagina con la informacion
		//que se encontro
		res.render('Consultar', datos);

	});*/

	/*db.persona.remove({usuario: nombre}, function (error, dato){

		console.log(error);
		console.log(dato);

	})*/

	db.persona.findOneAndUpdate({usuario: nombre}, 
		{$set: {direccion: "actualizado"}}, function (error, dato){
		console.log(error);
		console.log(dato);

	});

	
});

module.exports = router;

//      CommonJS
//   npm install mongoose --save








