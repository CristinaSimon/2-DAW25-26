"use strict"
const saludo=(callback)=>{
    //función de bloqueo
    setTimeout(()=>{ //setTimeout es asíncrono
        console.log('hola');
        callback();//llama a la funcion que se a pasado como argumento. Se ejecutara cuando muestre el saludo
    },5000);
}

const finalizar=()=>{
    console.log('...Finalizado');
}


//main()
console.log('Iniciando...');
//muestra iniciando, llama a la funcion iniciando y a la funcion finalizar
saludo(finalizar)