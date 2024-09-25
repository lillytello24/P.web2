
let longitud = prompt("Ingresa el tamaño de tu cuadrado:");
let cuadrado = parseInt(longitud);

let resultado = "";  // Creamos una cadena vacía para almacenar el cuadrado

for (let i = 0; i < cuadrado; i++) {
    for (let j = 0; j < cuadrado; j++) {
        resultado += "*";  // Agregamos asteriscos en cada fila
    }
    resultado += "\n";  // Agregamos un salto de línea al final de cada fila
}

console.log(resultado);  // Imprimimos todo el cuadrado de una sola vez

