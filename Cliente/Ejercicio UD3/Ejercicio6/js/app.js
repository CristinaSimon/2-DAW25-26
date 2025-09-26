"use strict"
const comentario="@usuario123: ¡Me encanta este curso de JavaScript! pero odio, odio los bugs... "



document.writeln(`El comentario es <strong>${comentario}</strong><br>`);
document.writeln(`El nº de caracteres es: <strong>${comentario.length+1}</strong><br>`);
document.writeln(`El nº de caracteres despues de limpiar los espacios en blanco es: <strong></strong><br>`);
document.writeln(`El usuario es: <strong></strong><br>`);
document.writeln(`El comentario en mayúsculas es: <strong>${comentario.toLocaleUpperCase()}</strong><br>`);
document.writeln(`El comentario en minusculas es: <strong>${comentario.toLocaleLowerCase()}</strong><br>`);
document.writeln(`La palabra "genial" <strong></strong><br>`);
document.writeln(`La palabra "odio" <strong></strong><br>`);
document.writeln(`Censurar la palabra "odio" <strong></strong><br>`);
document.writeln(`El numero de vocales en el comentario es: <strong></strong> vocales<br>`);
document.writeln(`Las palabras que contiene el comentario son: <strong></strong> palabras<br>`);
document.writeln(`Verifica si el comentario empieza con "@" y termina con "punto": <strong></strong><br>`);
document.writeln(`El comentario invertido es: <strong></strong><br>`);
document.writeln(``);