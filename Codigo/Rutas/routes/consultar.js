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

	//Ahora quiero actualiza la informacion
	db.persona.findOneAndUpdate({usuario: nombre},
		{  $set: {
				direccion: 'Pie de la Cuesta'
				}
		}, function(error){
			res.redirect('/');
		});

	//Ahora el caso de que quiera eliminar
	/*db.persona.remove({usuario: nombre}, function(error){
		res.redirect('/');
	});
*/
	//utilizando el nobre que me envian lo busco en la coleccion
	/*db.persona.findOne({usuario: nombre}, function(error, dato){
		var pantalla = {
			title: 'Consultar informacion',
			nombre: nombre,
			direccion: dato.direccion
		};
		res.render('Consultar', pantalla);
	});*/

	

});

module.exports = router;

//      CommonJS
//   npm install mongoose --save








