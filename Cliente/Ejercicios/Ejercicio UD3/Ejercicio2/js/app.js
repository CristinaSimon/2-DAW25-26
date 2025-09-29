"use strict"
let contador=0,temporizador;

/**
 * Funcion para iniciar un temporizador, a recordar, tiene que ser funcion, tiempo
 */
function iniciar(){
    if(temporizador===undefined){//comprobar si ya existe y si existe, eliminarlo
       temporizador=setInterval(sumaCon,1000);
    }
    

}
/**
 * Funcion para incrementar el contador
 */
function sumaCon(){
    contador++;// aumenta el contador
    console.log(contador);//imprime el contador por consola para que el incremento sea visible
}
/**
 * Funcion para parar el temporizador
 */
function parar(){
    clearInterval(temporizador);//para el contador 
    temporizador=null;
    console.log(`temporizador parado`);
}