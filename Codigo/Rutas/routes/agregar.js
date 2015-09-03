var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Agregar', { title: 'Agregar nueva persona'});
});


//POST
router.post('/', function (req, res) {
	//Aqui puedo obtener la informacion del formulario
	console.log(req.body);

	//Poner aqui la logica para insertar en la coleccion
	//de la base de datos
	var nuevaPersona = {
		usuario: 'Monito',
		direccion: 'en algun lugar'
	};

	var nuevo = new db.persona(nuevaPersona);

	nuevo.save(function (error, nuevo){
		console.log(nuevo);
	});


	res.redirect('/');
})

module.exports = router;
