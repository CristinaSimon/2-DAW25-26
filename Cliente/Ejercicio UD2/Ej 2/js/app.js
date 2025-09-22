"use strict"
let numero,suma=0,nsuma=1;
/**
 * Para pidir el numero y comprobar que sea positivo
 */
numero = prompt("Introduzca número (0->Fin)");
while (numero <= 0) {
    console.error("el numero no es positivo")
    numero = prompt("Numero erroneo Introduzca número 0->Fin");
}
/**
 * doWhile para ir sumando desde 1 a un numero dado por consola 
 */
do{
suma+=nsuma
nsuma++
}while(nsuma<=numero);

console.log (`La suma desde 1 hasta ${numero} es ${suma}`);

/**
 * bucle para  hacer que  
 * te muestre solos los numeros pares de un numero dado por consola
 */
    console.log(`mostrando numeros pares desde 2 hasta ${numero}`);
    for(let i=2;i<=numero; i+2){
        console.log(i);
    }
