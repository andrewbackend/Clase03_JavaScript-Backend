let suma = 10 + 5;
let resta = 20 - 8;
let multiplicacion = 4 * 6;
let division = 30 / 5;
let modulo = 10 % 3;
let exponente = 2 ** 3; 

console.log("Suma: ", suma);
console.log("Resta: ", resta);

/*
Crea un programa que permita al usuario realizar OMB de manera interactiva.
El usuario deberá ingresar dos números y elegir qué operación desea realizar.
*/

let numero1 = parseFloat(prompt("Digite el primer número: "));
let numero2 = parseFloat(prompt("Digite el segundo número: "));

let opcion = prompt(
    "Seleccione la operación que desea realizar:\n"+
    "1: Suma\n" +
    "2: Resta\n" +
    "3: Multiplicación\n" +
    "4: División\n" +
    "5: Módulo\n" +
    "6: Potencia\n" 
);

let resultado;

switch (opcion){
    case "1":
        resultado = numero1 + numero2;
        alert(`La suma de ${numero1} + ${numero2} es: ${resultado}`);
        break;
    case "2":
        resultado = numero1 - numero2;
        alert(`La resta de ${numero1} - ${numero2} es: ${resultado}`);
        break;
    case "3":
        resultado = numero1 * numero2;
        alert(`La multiplicación de ${numero1} * ${numero2} es: ${resultado}`);
        break;
    case "4":
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
            alert(`La división de ${numero1} / ${numero2} es:  ${resultado}`);
        } else {
            alert("Error: No se puede dividir entre 0")
        }
        break;
    //case 5:  modulo
    //caso 6: potencia
    default:
        alert("Opción no válida. Por favor, ingrese un número entre 1 y 6");
        
}