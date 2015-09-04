module.exports = function(app, server){
	
	var socketIO = require('socket.io').listen(server);    //libreria para socketIO
        
	global.socketIO = socketIO;    //variable global temporal para hacer broadcast

    //Inicializa la conexión con los websockets del navegador
	socketIO.sockets.on('connection', function(socket){
        
        //Almacena el socket de la conexión principal para con este
        //hacer un broadcast de las señales.
		if (global.enviar == null)
			global.enviar = socket;
        
		console.log('Se ha conectado un navegador.');
        
        socket.on('enviandoMensaje', function (dato) {
            console.log(dato);

            global.enviar.broadcast.emit('difusion',dato);
        });
	});
}