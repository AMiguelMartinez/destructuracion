const numeros: number[] = [10,20,30,40,50];
console.log(numeros[0]);
const [a,b,c] = numeros;
console.log(a);
console.log(b);

const [primero, , segundo] = numeros;
console.log(primero);

const [x, ...resto] = numeros;
console.log(x);
console.log(resto);