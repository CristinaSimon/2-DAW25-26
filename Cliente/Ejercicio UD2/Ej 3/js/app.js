"use strict"
let calificacion, resultado;
/**
 * bucle con dowhile e  if 
 * para controlar que meta una nota y que esta sea valida
 */
do{
    calificacion=prompt("¿Cual es la calificacion del alumno? (Entre 1 y 100)");
} while(calificacion===null);

if(calificacion<50 ){
    resultado="No superado";
}else if(calificacion>=50 && calificacion <=69){
        resultado="Necesitas mejorar";
}else if(calificacion>=70 && calificacion <=84){
        resultado="Buen trabajo";
}else if(calificacion>=85 && calificacion <=100){
    resultado="Excelente trabajo";
}else{
        resultado= "Error, debe ser una calificación válida. RECUERDA Entre 1 y 100";
};


console.log(`Ejercicio con if -> La calificacion ${calificacion} es ${resultado}`);