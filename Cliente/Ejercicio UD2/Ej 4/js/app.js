"use strict"
let opcion, base, altura, area;
/**
 * bucle while para controlar que la opcion no sea la de salir y
 * mientras no sea esa usar el swich para  hacer algunas de las opciones 
 */
while(opcion!=="4"){
    opcion=prompt(`Escoge una de las opciones: 1- Area del triangulo 2- Area del rectangulo 3-Media aritmetica 4- Salir`);
    switch(opcion){
        case "1":
            base=prompt("Dame la base del triangulo");
            altura=prompt("Dame la altura del triangulo");
            parseFloat(area=(base*altura)/2);
            console.log(`El area del triangulo es ${area}`);
            break;
        case "2":
            base=prompt("Dame la base del rectangulo");
            altura=prompt("Dame la altura del rectangulo");
            parseFloat(area=(base*altura));
            console.log(`El area del rectangulo es ${area}`);
            break;
        case "3":
           const n1=prompt("Dame un numero");
            const n2=prompt("Dame otro numero");
            const media=parseFloat((n1+n2)/2);
            console.log(`La media aritmetica es: ${media}`);
            break;
        case "4":
            console.log("Adios!");
            break;
        default:
            alert("Opcion no valida");


    }
}