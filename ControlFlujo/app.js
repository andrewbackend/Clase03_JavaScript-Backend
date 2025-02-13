// Decisión basada en la edad de una persona

let edadUsuario = 14;

if (edadUsuario >= 18){
    console.log("Eres mayor de edad, puedes ingresar.");
} else {
    console.log("Lo siento, eres menor edad");
}

//Uso de switch para manejar múltiples casos

let dia = "miercoles";

switch (dia) {
    case "lunes":
        console.log("Es el inicio de la semana.");
        break;
    case "viernes":
        console.log("Es viernes, casi fin de semana!!");
        break;
    case "domingo":
        console.log("Día de descanso");
        break;
    default:
        console.log("Es un día normal.");
}

/*
Verifica si un estudiante aprobó o reprobó un examen según su puntaje
*/

console.log("========================");
/*
Asigna una calificación basada en una nota obtenida
*/

let nota = "A";

switch (nota) {
    case "A":
        console.log("Excelente desempeño.");
        break;
    case "B":
        console.log("Buen trabajo.");
        break;
    case "C":
        console.log("Puedes mejorar.");
        break;
    case "D":
        console.log("Necesitas esforzarte más.");
        break;
    default:
        console.log("Nota no válida.");
}

/*
Recomienda un medio de transporte en función del clima
*/


/*
Crea un sistema que valide si un usuario puede acceder a una aplicación. Para ello, 
debe ser mayor de 18 años y tener una cuenta activa. Si cumple ambos requisitos,
muestra un mensaje de bienvenida; si no, indica la razón por el cual no puede
acceder.
*/
let edadPersona = 28;
let cuentaActiva = true;

if (edadPersona >= 18 && cuentaActiva){
    console.log("Bienvenido a la app");
}else if (edadPersona < 18){
    console.log("Acceso denegado");
} else {
    console.log("Tu cuenta no está activa")
}

/*
En una tienda virtual, los clientes tienen categorías según sus puntos de fidelidad.
Si tienen más de 1000 puntos, son "Clientes Premium". Si tienen entre 500 y 1000,
son "Clientes Frecuente". Si tienen menos de 500, son "Cliente Nuevo"
*/

/*
Desarrolla un sistema que identifique el rol de un usuario en un sistema de gestión.
Si un usuario es "Admin", tiene un acceso total. Si es "Editor", puede modificar contenido.
Si es "Usuario", solo puede ver información. Si el rol no está definido, muestra un mensaje
de error.
*/
