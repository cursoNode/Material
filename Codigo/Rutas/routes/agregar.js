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
	
	//crear un objeto JSON con los datos recibidos
	var nuevaPersona = {
		usuario: req.body.campoNombre,
		direccion: req.body.campoDireccion
	};

	var nuevo = new db.persona(nuevaPersona);

	//indicarle a mongo que lo almacene

	nuevo.save(function (error, dato){
		if (!error) {
			console.log('se ha insertado un nuevo registro');
			console.log(dato);
		} else {
			console.log(error);
		}

		res.redirect('/');
	});
})

module.exports = router;








