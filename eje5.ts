type Dimension = {
    base: number,
    altura: number
}

function calcularArea({base, altura}: Dimension) {
    return (base * altura)/2;
}

console.log(calcularArea({base: 10, altura: 20}));