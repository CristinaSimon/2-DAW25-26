"use strict"
const ejecutarPromesa = (mensaje) => {
    return new Promise((resolve, reject) => {
        const exito = Math.random() > 0.5//boolean true o false
        setTimeout(() => { //setTimeout es asíncrono
            if (exito) {
                resolve(mensaje)
            } else {
                reject(`Error, el tiempo muerto fallo`);
            }

        }, 1500);

    })

}

const finalizar = () => {
    console.log('...Finalizado');
}


//main()
console.log('Iniciando...');

ejecutarPromesa("Primer tiempo muerto")
    .then(mensaje => {

        console.log(mensaje);
        return ejecutarPromesa(`Segundo tiempo muerto`)
    })
    .then(mensaje => {
        console.log(mensaje);
        return ejecutarPromesa(`Tercer tiempo muerto`)
    })
    .then(mensaje => {
        console.log(mensaje);
        finalizar()
    })
    .catch(error => {
        console.log(error);
    })
