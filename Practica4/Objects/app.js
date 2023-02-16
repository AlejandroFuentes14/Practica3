let persona = {
    nombre: "Jesús",
    apellido: "Fuentes",

    getName: function (){ //Esta función nos ayuda a completar una oración directamente debido a la concatenación y llamada de variables clave.
        return `${this.nombre} ${this.apellido}`
    },

    domicilio: {
        calle: "Madero #144",
        colonia: "centro",
        cp: 28000,
        municipio: "Colima",

        getDomicilio: function(){ //Aquí tienes que tener cuidado donde vas a escribir el código porque está dentro de la capa de persona y la capa de inicio, es como cavar en el código.
            return `${this.calle} colonia: ${this.colonia} CP: ${this.cp}, ${this.municipio}`
        }
    },

}

console.log(persona.getName());//Aquí imprimos getName
console.log(persona.domicilio.getDomicilio());// Aquí imprimimos getDomicilio