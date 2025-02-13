//Ciclo for: Imprimir los números del 1 al 5

for (let i=1; i<=5; i++ ){
    console.log("Numero: ", i);
}

//Ciclo While: Cuenta regresiva desde 5
let contador = 5;
while(contador > 0 ){
    console.log("Cuenta regresiva: ", contador)
    contador--;
}

//Ciclo do-while: Se ejecuta al menos una vez
let intentos = 0;
do {
    console.log("Intento número: ", intentos+1);
    intentos++;
}while (intentos < 3);