// Inicializamos la variable comprar en 0
let comprar = [];

// aqui vamos a mostrar nuestro menu
function mostrarMenu() {
    return parseInt(prompt(`
        Opciones disponibles:
        1. Jabon Corporal - $23
        2. Pan Tostado - $32
        3. Caja de Huevo - $105
        4. Mermelada - $35
        5. Ver carrito y salir
        6. Salir
        `));
}
let precios = {
    jabon: 23,
    pan: 32,
    huevo: 105,
    mermelada: 35
};

// agregamos el jabon en una funcion y consecutivamente con cada producto
// vamos a utilizar alert para que nos saque una ventanita que nos afirme que se agrego bien 
// el producto 
function agregarJabon() {
    comprar.push("Jabon Corporal - $23");
    alert("Jabon Corporal agregado correctamente.");
    console.log(`Producto "Jabon" agregado al carrito`);
}


function agregarPan() {
    comprar.push("Pan Tostado - $32");
    alert("Pan Tostado agregado correctamente.");
    console.log(`Producto "Pan Tostado" agregado al carrito`);
}


function agregarHuevo() {
    comprar.push("Caja de Huevo - $105");
    alert("Caja de Huevo agregada correctamente.");
    console.log(`Producto "Caja de Huevo" agregado al carrito`);
}


function agregarMermelada() {
    comprar.push("Mermelada - $35");
    alert("Mermelada agregada correctamente.");
    console.log(`Producto "Mewrmelada" agregado al carrito`);
}


function verCarrito() {
    if (comprar.length === 0) {
        alert("No hay productos en el carrito.");
    } else {
        let mensaje = "Lista de productos:\n";
        comprar.forEach((producto, index) => {
            mensaje += `${index + 1}. ${producto}\n`;
        });
        alert(mensaje);
    }
}
// hacemos una funcion para iniciar nuestro programa un while para que si esta persona decide contunuar 
// vuelva a mostrar nuestro menu
// y un swich para poner las posibles opciones
function iniciarPrograma() {
    let continuar = true;
    while (continuar) {
        let opcion = mostrarMenu();
        switch (opcion) {
            case 1:
                agregarJabon();
                break;
            case 2:
                agregarPan();
                break;
            case 3:
                agregarHuevo();
                break;
            case 4:
                agregarMermelada();
                break;
            case 5:
                verCarrito();
                continuar = false; // Salir del programa después de ver el carrito
                break;
            case 6:
                alert("Saliendo del programa...");
                continuar = false;
                break;
            default:
                alert("Opción no válida. Intenta nuevamente.");
        }
    }
    alert("Programa finalizado");
}

// Iniciar el programa
iniciarPrograma();
