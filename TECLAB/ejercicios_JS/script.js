//let edad = 14;

/*function mostraredad(edad) {
    if(edad>=18){
        console.log(`si el usuario tiene ${edad} años es mayor de edad`);
    }else
        console.log(`si el usuario tiene ${edad} años es menor de edad`);
}*/


//mostraredad(18);
//mostraredad(14);
//mostraredad(20);

/*function mostraredad(edad) {
    if(edad>=18){
        return(`si el usuario tiene ${edad} años es mayor de edad`);
    }else
        return(`si el usuario tiene ${edad} años es menor de edad`);
}


console.log(mostraredad(18))
console.log(mostraredad(14))
console.log(mostraredad(20))*/

//let nombre="Juan";
//let apellido="Perez";
//console.log(nombre + " " + apellido);
//console.log(`${nombre} ${apellido}`); //se concatena con bastic y se llama interpolacion

let precio=1000
let clienteVip=true

function calcularPrecio(precio, clienteVip) {
    if(clienteVip){
        return `el precio con descuento es: ${precio * 0.8}`;
} else {
    return `el precio sin descuento es: ${precio}`;
}
}
const precioFinal1 = calcularPrecio(2500,true)
const precioFinal2 = calcularPrecio(2000,false)

console.log(precioFinal1)
console.log(precioFinal2)