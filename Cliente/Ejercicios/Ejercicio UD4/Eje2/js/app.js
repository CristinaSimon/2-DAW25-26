"use strict"
/**
 * 
 */
const libros = new Set([
  ['El Principito', 30, 10],
  ['1984', 15, 12],
  ['Cien Años de Soledad', 8, 20],
  ['Don Quijote', 5, 18],
  ['1984', 15, 12], // duplicado, Set lo eliminará
  ['Harry Potter', 50, 25]
]);
/**
 * 
 */
const detalles = new Map([
  ['El Principito', { autor: 'Antoine de Saint-Exupéry', genero: 'Ficción' }],
  ['1984', { autor: 'George Orwell', genero: 'Distopía' }],
  ['Cien Años de Soledad', { autor: 'Gabriel García Márquez', genero: 'Realismo mágico' }],
  ['Don Quijote', { autor: 'Miguel de Cervantes', genero: 'Clásico' }],
  ['Harry Potter', { autor: 'J.K. Rowling', genero: 'Fantasía' }]
]);

/**
 * funcion para mostrar el invertario de manera formateada para que lo muestre completo
 * @returns 
 */
function mostrarInventario() {
  let inventario = '';
  for (const [titulo, cantidad, precio] of libros) {
    const { autor, genero } = detalles.get(titulo);
    inventario += ` ${titulo} | Copias: ${cantidad} | Precio: ${precio}€ | Autor: ${autor} | Género: ${genero}\n`;
  }
  return inventario.trim();
}

/**
 * 
 * @returns 
 */
function libroMenosCantidad() {
  const aLibros = Array.from(libros);
  const index = aLibros.findIndex(libro => libro[1] < 10);

  if (index === -1) return 'No hay libros con menos de 10 copias.';

  const [titulo, cantidad, precio] = aLibros[index];
  const { autor, genero } = detalles.get(titulo);
  return ` ${titulo} (Copias: ${cantidad}, Precio: ${precio}€) | Autor: ${autor}, Género: ${genero}`;
}

/**
 * 
 * @returns 
 */
function eliminarTercerLibro() {
  const aLibros = Array.from(libros

  );
  if (aLibros.length < 3) return 'No hay suficientes libros para eliminar el tercero.';
  
  const eliminado = aLibros.splice(2, 1)[0]; // elimina el tercero (índice 2)
  libros.clear();
  aLibros.forEach(l => libros.add(l));

  return aLibros.map(([titulo, cantidad]) => `${titulo} (${cantidad} copias)`).join('\n');
}

/**
 * 
 * @returns 
 */
function filtrarLibrosMasDe20() {
  const aLibros = Array.from(libros

  );
  const filtrados = aLibros.filter(libro => libro[1] > 20);

  return filtrados.map(([titulo, cantidad]) => {
    const { autor } = detalles.get(titulo);
    return `${titulo} (${cantidad} copias) | Autor: ${autor}`;
  }).join('\n');
}

/**
 * 
 * @returns 
 */
function ordenarPorCantidad() {
  const aLibros = Array.from(libros

  ).sort((a, b) => a[1] - b[1]);
  return aLibros.map(([titulo, cantidad]) => `${titulo}: ${cantidad} copias`).join('\n');
}

/**
 * 
 * @returns 
 */
function calcularValorTotal() {
  const aLibros = Array.from(libros

  );
  const total = aLibros.reduce((acc, libro) => acc + libro[1] * libro[2], 0);
  return `Valor total del inventario: ${total}€`;
}

/**
 *  funcion para añadir un libro
 * @param {String} titulo 
 * @param {Number} cantidad 
 * @param {Number} precio 
 * @param {String} autor 
 * @param {String} genero 
 * @returns 
 */
function añadirLibro(titulo, cantidad, precio, autor, genero) {
  libros.add([titulo, cantidad, precio]);
  detalles.set(titulo, { autor, genero });
  return mostrarInventario();
}

/**
 * 
 * @returns 
 */
function libroMasCaro() {
  const aLibros = Array.from(libros

  );
  const [titulo, , precio] = aLibros.reduce((max, libro) => (libro[2] > max[2] ? libro : max));
  const { autor, genero } = detalles.get(titulo);
  return `Libro más caro: ${titulo} (${precio}€) | Autor: ${autor} | Género: ${genero}`;
}

/**
 * 
 * @returns 
 */
function eliminarMasBarato() {
  const aLibros = Array.from(libros);
  const masBarato = aLibros.reduce((min, libro) => (libro[2] < min[2] ? libro : min));
  
  libros.delete(masBarato);
  detalles.delete(masBarato[0]);

  return mostrarInventario();
}

// script
document.writeln('1️Inventario inicial:\n', mostrarInventario());
document.writeln('Primer libro con <10 copias:\n', libroMenosCantidad());
document.writeln('Eliminar tercer libro:\n', eliminarTercerLibro());
document.writeln('Libros con >20 copias:\n', filtrarLibrosMasDe20());
document.writeln('Ordenados por cantidad:\n', ordenarPorCantidad());
document.writeln('Valor total:\n', calcularValorTotal());
document.writeln('Añadir nuevo libro:\n', añadirLibro('La Sombra del Viento', 25, 22, 'Carlos Ruiz Zafón', 'Misterio'));
document.writeln('Libro más caro:\n', libroMasCaro());
document.writeln('Eliminar libro más barato:\n', eliminarMasBarato());

