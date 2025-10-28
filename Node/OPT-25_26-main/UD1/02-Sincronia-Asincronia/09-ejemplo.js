//La simulacion de un proceso de compra en linea.
//revisamos el inventario:verificar si el producto esta en el almacen
//procesa el pago: si el producto esta disponible procesa el pago
//Enviar confirmacionj de compra: Una vez aprobado el pago, envia un e-mail de confirmacion
//cada etapa sera una uncion que devuelva una promesa
//lo haremos con then y catch y luego con Async-await

const revisarInventario=(producto)=>{
    return new Promise((resolve, reject) => {
        console.log(`verificando inventario para ${producto}`);
        setTimeout(()=>{
            const aProductos=['pantalon', 'camisa', 'falda', 'vestido'];
            const existe=aProductos.find(product=>product.toLocaleLowerCase()===producto.toLocaleLowerCase())
            if(existe!==undefined){
                resolve(`${producto} existe en el almacen`);
            }else{
                reject(`${producto} no existe en el almacen`);
            }

        },1500);
    })

}
const revisarSaldo=(pago)=>{
    return new Promise((resolve, reject) => {
        console.log(`procesando pago`);
        setTimeout(()=>{
            const saldoDisponible=100;   
            if(saldoDisponible>=pago){
                resolve(`Pago aprobado`);
            }else{
                reject(`Pago no  aprobado`);
            }
  
        },1500);
    })

}
const confimarEnvio=(email)=>{
    return new Promise((resolve, reject) => {
        console.log(`Enviando confirmacion de compra`);
        setTimeout(()=>{
            if(email.includes("@")){
                resolve(`Confirmacion de compra enviada al E-mail`);
            }else{
                reject(`E-mail invalido`);
            }
  
        },1500);
    })

}
const finalizar=()=>{
    console.log(`Operacion terminada`);
}

//cuerpo Script
// revisarInventario('pantalon')
// .then(producto=>{
//     console.log(producto);
//     return revisarSaldo(50);
// })
// .then(pago=>{
//     console.log(pago);
//     return confimarEnvio('email@email.com')
// })
// .then(email=>{
//     console.log(email);
//     finalizar();
// }).catch(error=>{
//     console.log(error);

// })

//con async-await

const compra=async()=>{
    try {
        await revisarInventario('pantalon')
        await revisarSaldo(50)
        await confimarEnvio('email@email')
    } catch (error) {
        console.log(error);
    }
}

compra();