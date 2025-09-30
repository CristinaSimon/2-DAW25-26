"use stricts"
let nombreProducto="",cantidadProducto=0;
/**
 * Agrega un producto nuevo o añade una cantidad si ya existe
 * @param {String} nombre 
 * @param {number} cantidad 
 */
function agregarProducto (nombre, cantidad){
    if(cantidadProducto===0 && nombreProducto===""){
        nombreProducto=nombre;
        cantidadProducto=cantidad;
    }else{
        cantidadProducto+=cantidad;
    }
    alert(`Producto agregado con exito ${nombreProducto} cuya cantidad es ${cantidadProducto}`)
};
/**
 * Elimina x cantidad de producto si existe y tiene suficiente cantidad
 * @param {String} nombreProducto 
 * @param {number} cantidadProducto 
 */
const eliminarProducto=function(nombreProducto,cantidadProducto){
    if(cantidadProducto===0 && nombreProducto===""){
        alert(`No existe el producto`)
    }else{
        cantidadProducto=0;
        nombreProducto="";

    }
}
/**
 * Consulta el inventario
 */
const consultarInventario=()=>{
    alert(`El producto es ${nombreProducto} y la cantidad es de ${cantidadProducto}`);
}
/**
 * Cambia el nombre de un producto despues de comparar si existe
 * @param {String} nombreActual 
 * @param {String} nuevoNom 
 */
const cambiarNombreProducto=(nombreActual, nuevoNom)=>{
    if(nombreProducto==="" || nombreProducto!==nombreActual){
        alert(`El producto ${nombreActual} no existe. Creelo o pruebe otro nombre.`)
    }else{
        nombreProducto=nuevoNom;
    }
}
/**
 * Obtiene la cantidad de un producto despues de confirmar que existe con un If
 * @param {String} nombre 
 */
const obtenerCantidad=(nombre)=>{
    if(nombreProducto==="" || nombreProducto!==nombre){
        alert(`El producto ${nombre} no existe. Creelo o pruebe otro nombre.`)
    }else{
        alert(`El Producto ${nombreProducto} tiene ${cantidadProducto} unidades`)

    }
}

document.writeln(agregarProducto('peras',10));
document.writeln(eliminarProducto('peras',10));
document.writeln(consultarInventario('peras',10));