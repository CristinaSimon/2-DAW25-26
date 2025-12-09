"use strict"
/**
 * @description Expresion regular para validar El nombre de Usuario sefun los requisitos
 */
    /**
     * Debe contener minimo 4 carrateres y Maximo 20 ->{4,20}
     * Debe comenzar con Mayusculas->^[A-ZÑ]
     * Solo letras incluida acenturadas y ñ->[a-zá-úñ][A-ZÁ-ÚÑ]
     * Debe tener un guion Bajo (_)->(?=.*_)
     */

export const expNombre="^[A-ZÑ](?=.*_)[a-zá-úñ][A-ZÁ-ÚÑ]{4,20}$";

/**
 * @description Expresion regular para validar tanto un NIE como un DNI
 */
    /**
     * DNI 8 digitos seguidos de una letra mayuscula
     * NIE XYZ seguidos de 7 digitos y terminar en letra mayuscula
     * 
     * ^[XYZ]|[1-9]-> o empieza por esas letras en mayuscula o por un numero
     * \d{7} -> contiene 7 digitos
     * [A-Z] -> Termina en una letra en mayuscula
     * {9} -> debe contener una longitud de 9 caracteres
     */
export const expDniNie="^[XYZ]|[1-9] \d{7} [A-Z]{9}$";