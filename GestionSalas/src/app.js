import { generarSemanal, borradoMensual } from "./bbdd/bbdd.js";

console.log("Generando reservas semanales...");
generarSemanal();

console.log("Realizando borrado mensual...");
borradoMensual(5);

console.log("Tareas ejecutadas.");
