"use strict"
/**
 * @description funcion que crea la promesa
 * @returns {Promise}
 */
const ejecutarPromesa=()=>{
    //crear la promesa
    return new Promise((resolve, reject)=>{
        const exito=Math.random()>0.5//boolean true o false
        if(exito){
            resolve(`Primer tiempo muerto completado`)
        }else{
            reject(`Error, el tiempo muerto fallo`);
        }
    })
}

const finalizar=()=>{
    console.log('...Finalizado');
}


//main()
console.log('Iniciando...');
ejecutarPromesa().then(mensaje=>{
    console.log(mensaje);
    finalizar();
}).catch(error=>{
    console.log(error);
}).finally(()=>{//opcional
    console.log(`Promesa finalizada`);
})
