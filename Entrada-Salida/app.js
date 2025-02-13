//Entrada de datos con prompt

let nombreUsuario = prompt("¿Cuál es tu nombre?");
console.log("Bienvenido", + nombreUsuario + "!");

alert(" Hola" + nombreUsuario + " Bienvenido a nuestra página");

/*
Permite al usuario elegir entre diferentes productos y muestra 
el precio correspondiente
*/
let producto = prompt("Elige un producto: 1) Laptop, 2) Audifnos, 3) Mouse ");
let precio;

switch(producto){
    case "1":
        precio = 1200;
        alert("Has elegido una laptop. Precio: s/. "+precio);
        break;
    case "2":
        precio = 50;
        alert("Has elegido audifonos. Precio: s/. "+precio);
        break;
    case "3":
        precio = 50;
        alert("Has elegido una tablet. Precio: s/. "+precio);
        break;
    default:
            alert("Opción no válida");
}

/*
 Solicita al usuario el monto total de una compra y aplica un descuento del 10% 
 si supera a los S/100.
*/


