const persona = {
    nombre: "Juan",
    edad: 30,
    pais: "España",


}

console.log(persona.nombre);

const {nombre, edad, pais} = persona;
console.log(nombre);

const {nombre: nombre2, edad: edad2, pais: pais2} = persona;
console.log(nombre2);
console.log(edad2);