//mi primer servidor web
var servicio = require('http');

servicio.createServer( function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end('Esta es mi primer pagina web');
}).listen(3000);

console.log(' servidor escuchando..... ');
