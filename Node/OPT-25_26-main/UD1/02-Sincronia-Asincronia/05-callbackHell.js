"use strict"
const tarea1=(callback)=>{
    //función de bloqueo
    setTimeout(()=>{ //setTimeout es asíncrono
        console.log('Primer tiempo muerto completado');
        callback();//llama a la funcion que se a pasado como argumento. Se ejecutara cuando muestre el saludo
    },1500);
}
const tarea2=(callback)=>{
    //función de bloqueo
    setTimeout(()=>{ //setTimeout es asíncrono
        console.log('Segundo tiempo muerto completado');
        callback();//llama a la funcion que se a pasado como argumento. Se ejecutara cuando muestre el saludo
    },1500);
}
const tarea3=(callback)=>{
    //función de bloqueo
    setTimeout(()=>{ //setTimeout es asíncrono
        console.log('Tercer tiempo muerto completado');
        callback();//llama a la funcion que se a pasado como argumento. Se ejecutara cuando muestre el saludo
    },1500);
}

const finalizar=()=>{
    console.log('...Finalizado');
}


//main()
console.log('Iniciando...');
// tarea1(function(){
//     tarea2(function(){
//         tarea3(function(){
//             finalizar()
//         })
//     })
// });

//con arrow
tarea1(()=>{
    tarea2(()=>{
        tarea3(()=>{
            finalizar()
        })
    })
});