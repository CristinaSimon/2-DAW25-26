"use strict"
/**
 * Programa que pedira al usuario que ingrese3 varias notas de un alumno
 * posteriormente se mostrara el promedio
 * La entrada de notas se realizara hasta que introduzca 'fin'
 * tambien se mostrara si el alumno aprobo o suspendio
 */

//importar el modulo readline para entrada de datos en la consola
import readline from "readline/promises";

//crear la interfaz para leer la entrada de datos
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
/**
 * @descriptiom funcion que pide el dato por consola
 * @param {string} texto 
 * @returns {Promises<String>}
 */
const aNotas=[];
let suma, media;

const promedioNotas=()=>{
    if(aNotas.length==0){
        return console.log("No hay notas");
    }else{
        suma=aNotas.reduce((acumulador, nota)=>acumulador+nota,0);
        media=suma/aNotas.length;
        console.log(`el promedio es ${media.toFixed(2)}`);
        console.log(`el aluno tiene ${media>=5?'aprobado':'suspenso'} el modulo`);
    }
    
}


const main=async()=>{
  try {
    let nota=await rl.question("Introduzca nota ('fin' para terminar)");
    while(nota.toLocaleLowerCase()!=='fin'){
        if(!isNaN(nota) && nota>0 && nota<=10){
            aNotas.push(Number(nota));
        }else{
            console.log("Nota introducida es incorrecta");
        }
        nota=await rl.question("Introduzca nota ('fin' para terminar)");
    }
    promedioNotas();   
      
  } catch (error) {
      console.error("Ha ocurrido un error:", error.message);
  } finally {
      rl.close();
  }
}

main();

