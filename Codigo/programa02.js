/*
Comentario sobre las funciones:

-	Las funciones son objetos
-	Las funciones tienen propiedades
-	Pueden asignarse a una variable
-	Pueden pasarse como argumento a una función
-   Pueden retornarse
*/

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


