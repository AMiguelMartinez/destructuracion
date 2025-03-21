const Usuario1 = {
    nombre: "Juan",
    password: "1234abc",
}

function mostrarInfo({nombre, password}: {nombre: string, password: string}): string {
return `${nombre} tiene contraseña: ${password}`;
}
console.log(mostrarInfo(Usuario1));
