class Rectangulo {

    constructor(public ancho: number, public alto: number) {
    }

    obtenerDimensión() {
const {ancho, alto} = this;
return {ancho, alto};
        
    }
}

const rect1 = new Rectangulo(10, 20);
console.log(rect1.obtenerDimensión());
