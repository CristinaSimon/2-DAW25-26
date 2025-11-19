"use strict"
/**
 * Valida que el año esté entre 1957 y 2006.
 * 195[7-9] (entre 1957 y 1959) ó
 * 19[6-9][1-0] (entre 1960 y 1999) ó
 * 
 */
export const nacimiento = /^195[7-9]|19[6-9][0-9]|200[0-6]$/;



/**
* Valida el usuario:
* - Empieza con #
* - Solo letras (mayúsculas/minúsculas/ñ)
* - Longitud total entre 5 y 15
*/
export const usuario = /^\#[A-Za-zÑñ]{4,14}$/


export const contrasena = {
  longitud: /^.{8,15}$/,                    // 8 a 15 caracteres
  mayus: /[A-Z]/,                         // Al menos una mayúscula
  minus: /[a-z]/,                         // Al menos una minúscula
  numero: /\d/,                          // Al menos un número
  especial: /[!@#~$%€&¬()=?¿¡<>çÇ{}]/,   // Al menos un carácter especial
  espacio: /^\S+$/                   // Sin espacios
};
