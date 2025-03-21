const nombres: string[] = ["Juan", "Pedro", "Carlos", "Marco"];

function imprimirValores([primero, ...resto]: string[]): string {
    return `valor 1: ${primero}, valor 2: ${resto}`;
}
console.log(imprimirValores(nombres));