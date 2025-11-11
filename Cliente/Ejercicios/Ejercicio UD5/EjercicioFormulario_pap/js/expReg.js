"use strict"
export const expReg = {
  /**
   * Valida que el año esté entre 1957 y 2006.
   * 195[7-9] (entre 1957 y 1959) ó
   * 19[6-9][1-0] (entre 1960 y 1999) ó
   * 
   */
  nacimiento: /^195[7-9]|19[6-9][1-0]|200[0-6]$/,

  /**
   * Valida el usuario:
   * - Empieza con #
   * - Solo letras (mayúsculas/minúsculas/ñ)
   * - Longitud total entre 5 y 15
   */
  usuario: /^\#[A-Za-zÑñ]{4,14}$/,

  /**
   * Criterios de contraseña
   * que contenda una mayuscula
   * una minuscula
   * un digito
   * un caracter especial
   * No  contega espacios
   */
  password: /^[A-ZÑ]\d\w\s.!\S{8,15}$/i
   
};