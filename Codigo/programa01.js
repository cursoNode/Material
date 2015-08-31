console.log('Hola mundo');

//Objetos asociado con los tipos primitivos
var cadena = 'Esto es una  cadena';
console.log(cadena);
console.log(cadena.length);

//el tipo de dato es flexible y lo puedo cambiar
cadena = 100.5;
console.log(cadena);

var cadena_obj = new String('Esto es otra cadena');
console.log(cadena_obj.length);

//numeros
var numero = 12;
var numero_obj = new Number(12);
console.log(numero);
console.log(numero_obj);

//boolean
var logico = true;
var logico_obj = new Boolean(true);
console.log(logico);
console.log(logico_obj);

// if  (algo === otra_cosa)
var numeroA = 1;
var cadenaB = 1;

console.log( numeroA === cadenaB );

//objetos compuestos
var lista = ['0', '1', '2', '3', '4'];
console.log(lista);

var objeto_literal = {
    nombre: 'Armando Cruz',
    telefono: '123456880'
};

console.log(objeto_literal);

//objetos definidos por Javascript
var fecha = new Date();
console.log(fecha);


