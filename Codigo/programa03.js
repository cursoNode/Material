//Jugando con objeto
/*
var fecha = new Date();
console.log(fecha.getFullYear());

//definiendo mi clase
function Persona(nombre, direccion) {
    //atributos son publicos
    this.nombre = nombre;
    this.direccion = direccion;
    
    //atributo privado
    var edad = 0;

    //metodos
    /*this.saludar = function(alguien) {
        console.log(this.nombre + ', te manda saludos ' + alguien);
    }*/
    
    //agrego mis metodos get y set para la edad
    /*this.getEdad = function () { return edad; }
    this.setEdad = function (nuevaEdad) {
        edad = nuevaEdad;
    }
};

//prototype
Persona.prototype.saludar = function(alguien) {
    console.log(this.nombre + ', te manda saludos ' + alguien);
};

Persona.prototype.crecer = function () {
    this.setEdad( this.getEdad()+1  );
}

var fulanito = new Persona('Cesar', 'CIDESI');
var otro = new Persona('Juan', 'Queretaro');
console.log(fulanito);
console.log(otro);

fulanito.saludar(' el grupo de node');
console.log (' La edad de fulanito es: ' +  fulanito.getEdad());
fulanito.crecer();
fulanito.crecer();
fulanito.crecer();
console.log (' La edad de fulanito es: ' +  fulanito.getEdad());

*/



//Aplicamos herencia

function Persona(nombre, direccion) {
    //atributos publicos
    this.nombre = nombre;
    this.direccion = direccion;
    
    //atributo privado
    var edad=0;
}

//Agregamos un metodo a Persona
Persona.prototype.saludar = function() {
    console.log('Hola, me llamo '+ this.nombre);
}

//Especializar para una clase que sea Estudiante
function Estudiante(nombre, direccion, clave) {
    //Aqui invocamos el constructor de Persona
    Persona.prototype.constructor.call(this, nombre, direccion);
    this.clave = clave;
}

//Le indicamos a Estudiante que herede de Persona
Estudiante.prototype = new Persona();
//corregimos el constructor de Estudiante
Estudiante.prototype.constructor = Estudiante;

//Le agrego un metodo a la clase Estudiante
Estudiante.prototype.estudiar = function() {
    console.log(' estoy estudiando node');
}

var alguien = new Persona('Juan', 'Por algun lado');
alguien.saludar();

var maria = new Estudiante('Maria', 'Queretaro', '12345');
maria.saludar();
maria.estudiar();

//Quienes son los constructores
console.log(alguien.constructor);
console.log(maria.constructor);































