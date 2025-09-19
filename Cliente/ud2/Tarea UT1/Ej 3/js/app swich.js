"use strict"
let calificacion, resultado;
/**
 * bucle con dowhile y swich 
 * para controlar que meta una nota y que esta sea valida
 */

do{
    calificacion=prompt("¿Cual es la calificacion del alumno?");

} while(calificacion===null);

switch(true ){
    case calificacion <50:    
        resultado="No superado";
    break;
    case calificacion <69:    
        resultado="Necesitas mejorar";
    break;
    case calificacion <84:    
        resultado="Buen trabajo";
    break;
    case calificacion <=100:    
        resultado="Excelente trabajo";
    break;
    default:
        resultado= "Error, debe ser una calificación válida";
    }

console.log(`Ejercicio con swich -> La calificacion ${calificacion} es ${resultado}`);