let nombre = prompt("Ingrese nombre:");
let apellido = prompt("Ingrese apellido:");
let edad = prompt("Ingrese su edad:");
let peso = prompt("Ingrese su peso en kg:");
let estatura = prompt("Ingrese su estatura en metros:");
let imc = parseFloat(peso)/parseFloat(estatura*estatura);

console.log("Hola: " + nombre, "Tienes " + edad + " años", "Tu IMC es:" + imc)