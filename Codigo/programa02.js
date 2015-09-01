/*
Comentario sobre las funciones:

-	Las funciones son objetos
-	Las funciones tienen propiedades
-	Pueden asignarse a una variable
-	Pueden pasarse como argumento a una función
-   Pueden retornarse
*/
/*
//mi primer funcion
function saludar (nombre) {
    console.log(' Hola ' + nombre);
};

saludar('grupo de Node.js');

//operador para concer el tipo de dato de un elemento
//    typeof
console.log(typeof('hola'));
console.log(typeof(123));
console.log(typeof(true));
console.log(typeof(saludar));


//Una funcion llamando a otra funcion
function saluda2 (dato) {
    console.log(' Hola grupo ' + dato);
}

function ejecutar (nombreFuncion, parametro, a,b,c) {
    nombreFuncion(parametro);
}

//aqui invoco la funcion
ejecutar(saluda2, ' buenos días');
*/
/*
//Como asignar una funcion a una variable
var saludo = function (parametro) {
    console.log(' hola ' + parametro);
}

saludo(' como estan??? ');
*/

/*
//Funciones anonimas!!!
(function (param) {
    console.log(' soy una funcion anonima ' + param);
})('aqui lo pongo');
*/

/*
//retornando una funcion anonima
function miFuncion(parametro) {
    // aqui le pueden poner algo de logica
    //
    return function() {
        console.log(' soy la funcion anonima del return');    
    }
}

//var funAnonima = miFuncion();
//funAnonima();

miFuncion()();
*/

/*
//Funciones dentro de funciones
function saludar() {
    function mensaje() {
        console.log(' Hola desde la funcion mensaje');
    }    
    return mensaje;
}

var saluda = saludar();
saluda();
*/

/*
//un programa que nos determine si un numero es par o impar

var parOimpar = function (valor) {
    if ( valor % 2 == 0) {
        return function() { console.log('es un numero par'); }
    } else {
        return function() { console.log(' es un numero impar'); }
    }
}
parOimpar(11)();
*/

//setInterval 
/*
var contador=0; //acumulador de segundod

function mensaje() {
    contador++;
    console.log(' han transcurido ' + contador + ' segundos');
        
    if (contador == 10) {
        //aqui lo detengo
        clearInterval(manejador);
    }
};

//aqui inicio el timer
var manejador = setInterval(mensaje, 1000);
*/
// si esto fuera con funciones anonimas
/*
var manejador = setInterval(function () {
    contador++;
    console.log(' han transcurido ' + contador + ' segundos');
        
    if (contador == 10) {
        //aqui lo detengo
        clearInterval(manejador);
    }
}, 1000);
*/


//setTimeout para entender el concepto de callback


function suma (a, b, funcion){
    setTimeout ( function() {
        var resultado = a + b;
        funcion(resultado);
        //return resultado;
    }, 2000);
};

suma(56,34, function (suma) {
    console.log(suma);
});

console.log(' por aca sigo.... ');













