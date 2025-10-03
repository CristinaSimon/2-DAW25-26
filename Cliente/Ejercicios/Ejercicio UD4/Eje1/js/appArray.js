"use strict"
let aProductos=[];
/**
 * Agrega un producto nuevo o añade una cantidad si ya existe
 * @param {String} nombre 
 * @param {number} cantidad 
 */
function agregarProducto (nombre, cantidad){
    const indice=aProductos.findIndex(producto=> producto[0]==nombre);
    if(indice>-1){
      aProductos[indice][1]+=cantidad   
      return `Producto modificado con exito ${aProductos[indice][0]} y la cantidad es ${aProductos[indice][1]} <br>`;
     
    }else{
        aProductos.push([nombre,cantidad]);
        return `Producto creado con exito ${nombre} y la cantidad es ${cantidad} <br>`;
    
    }
    
};
/**
 * Elimina x cantidad de producto si existe y tiene suficiente cantidad
 * @param {String} nombreProducto 
 * @param {number} cantidadProducto 
 */
const eliminarProducto=function(nombre,cantidad){
    const indice=aProductos.findIndex(producto=> producto[0]==nombre);
    if(indice>-1){
        if(aProductos[indice][1]>cantidad){
            aProductos[indice][1]-=cantidad;
            return `El producto ${aProductos[indice][0]} ahora tiene ${aProductos[indice][1]}`
        }else{
            return `El producto ${aProductos[indice][0]} contiene solo ${aProductos[indice][1]} por lo que no puedes restarle ${cantidad} por que la cantidad a quitar es mayor que la cantidad disponible`
        }
    }else{
        return `el producto ${nombre} no esta en el inventario, agregelo primero`
    }

}
/**
 * Consulta el inventario
 */
// const consultarInventario=()=>{
// }
/**
 * Cambia el nombre de un producto despues de comparar si existe
 * @param {String} nombreActual 
 * @param {String} nuevoNom 
 */
// const cambiarNombreProducto=(nombreActual, nuevoNom)=>{
// }
/**
 * Obtiene la cantidad de un producto despues de confirmar que existe con un If
 * @param {String} nombre 
 */
// const obtenerCantidad=(nombre)=>{
// }

document.writeln(agregarProducto('peras',10));
document.writeln(agregarProducto('peras',20));
document.writeln(eliminarProducto('peras',10));
// document.writeln(consultarInventario('peras',10));