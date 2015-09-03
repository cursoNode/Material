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

	//Aqui va la logica para buscar
	//en la base de datos
	var  datos = {
		title: 'Consultar informacion',
		nombre: '',
		direccion: ''
	};

	//obtengo la informacion de la base de datos
	datos.nombre = nombre;
	datos.direccion = 'direccion registrada';

	//actualizamos la pagina con la informacion
	//que se encontro
	res.render('Consultar', datos);
});

module.exports = router;

//      CommonJS
//   npm install mongoose --save








