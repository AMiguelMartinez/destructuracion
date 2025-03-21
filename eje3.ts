type personas = {
 nombre: string,
 edad?: number,

}

function mostrarDatos ({nombre, edad=18}: {nombre: string, edad: number}) {
return `El nombre es ${nombre} y tiene ${edad} años`;

}

const persona1: personas = {
    nombre: "Pedro",
    edad: 30
}

const persona2: personas = ({
    nombre: "Juan"
})



console.log(persona1);
console.log(persona2);
