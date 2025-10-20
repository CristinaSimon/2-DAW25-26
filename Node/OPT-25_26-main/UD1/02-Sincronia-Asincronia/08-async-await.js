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
const main=async()=>{
    //async function main(){
    try {
        const saludo= await ejecutarPromesa(`Primer tiempo muerto`);
        console.log(saludo);
        const saludoII= await ejecutarPromesa(`Segundo tiempo muerto`);
        console.log(saludoII);
        const saludoIII= await ejecutarPromesa(`Tercer tiempo muerto`);
        console.log(saludoIII);

    } catch (error) {
        console.log(error);
    }
    
}
//cuerpo script
console.log('Iniciando...');
main()
