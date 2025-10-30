"use strict"
import { promises } from "dns";
//importar el modulo readline para la entrada de datos en la consola
import readline from "readline";

//Crear la interfaz para leer la entrada de datos

const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

/**
 * @descriptiom funcion que pide el dato por consola
 * @param {string} texto 
 * @returns {Promises<String>}
 */
const preguntar = (texto) => {
  return new Promise((res,rej) => {
    try {
      rl.question(texto, (respuesta) => {
      res(respuesta);
      });
    } catch (error) {
      rej("error en la entrada")
    }
    
  });
};

const main=async()=>{
  console.log(`Bienvenid@s al primer proyecto de Node js`);
  try {
      const nombre = await preguntar("Introduzca su nombre: ");
      const edad = await preguntar("Introduzca su edad: ");
      console.log(`El nombre es ${nombre} y la edad es ${edad}`);
  } catch (error) {
      console.error("Ha ocurrido un error:", error.message);
  } finally {
      rl.close();
  }
}

main();

