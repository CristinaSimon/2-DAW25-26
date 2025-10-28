"use strict"
//importar el modulo readline para la entrada de datos en la consola
import readline from "readline";

//Crear la interfaz para leer la entrada de datos

const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
console.log(`Bienvenid@s al primer proyecto de Node js`);
// const nombre=rl.question("Introduzca su nombre: ");
// const edad=rl.question("Introduzca su edad: ");
rl.question("introduzca su nombre: ", nombre=>{
    rl.question("Introduzca la edad: ", edad=>{
        console.log(`El nombre es ${nombre} la edad es ${edad}`);
    })
})
// console.log(`El nombre es ${nombre} la edad es ${edad}`);

rl.close;