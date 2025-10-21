"use strict"
//Analizador de frases secretas analiza las frases que introduca el usuario 
//y muestra el analisis en una nueva ventana. Usar la API Temporal para la fecha
const fecha=new Date();
const formatoFecha=new Intl.DateTimeFormat('es-ES', { dateStyle: 'full', timeStyle: 'short', hour12:true });
let frase,continuar;

do{
frase=prompt(`Introduce la frase secreta`);
if(frase.length<=50 && frase!==""){
    analizarFrase(frase);
}else{
    frase=prompt(`Error.Introduce la frase secreta. Recuerda no puede ser vacia, ni mayor de 50 caracteres`);
}

continuar=confirm(`Desea enviaar otra frase`)

}while(continuar==true);

const analizarFrase=(frase)=>{
frase=frase.toLowerCase();
const vocales =frase.match(/aeiou/i).length;
const consonantes=0
const cPares=0;
const lPares=0;
const cImpares=0;
const lImpares=0;
for(let x=0; x<=frase.length; x++){
    if(!frase[x].match(/aeiou/i)){
        consonantes++;
        if(x/2==0){
            cPares++;
        }else{
            cImpares++
        }

    }
     if(x/2==0){
            lPares++;
        }else{
            lImpares++
        }
}
document.writeln(`La frase secreta: <blond>${frase}</blond>`);
document.writeln(`El numero de consonantes es: <blond>${consonantes}</blond>`);
document.writeln(`El numero de consonantes en posicion impar es: <blond>${cImpares}</blond>`);
document.writeln(`El numero de consonantes en posicion par es: <blond>${cPares}</blond>`);
document.writeln(`El numero de letras pares e impares: <blond>${(lPares===lImpares?'Son iguales':'No son iguales')}</blond>`);

}
const mostrarAnalisis=()=>{
    const ventana=window.open("",`Analisis de frases`, "width=200,height=200");
    ventana.document.writeln(`Ejercicio RA2-RA3 <br><br>`);
    ventana.document.writeln(`La fecha de hoy es: ${formatoFecha.format(fecha)} <br><br>`);
    ventana.document.writeln(`${analizarFrase}`)
    ventana.document.writeln("<button type='button' onclick='self.close()'>Cerrar</button>")
}

//script

mostrarAnalisis();
