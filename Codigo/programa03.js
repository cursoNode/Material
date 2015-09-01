//Jugando con objeto

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
    this.getEdad = function () { return edad; }
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







