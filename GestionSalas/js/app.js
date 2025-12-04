"use strict"
import express from "express";
import { config } from "dotenv";
import { cargarOpciones } from "./funcionalidad.js"
import { routerReservas } from "../src/routes/reservas.router.js";
import { routerSalas } from "../src/routes/salas.router.js";
import { routerEncargados } from "../src/routes/encargados.router.js";
import { routerHistorico } from "../src/routes/reserva_historico.router.js";
import { routerActividades } from "../src/routes/actividades.router.js";
import { generarSemanal, borradoMensual } from "../src/bbdd/bbdd.js";

config();
const PORT =process.env.PORT || 3000;
console.log(PORT);

const server= express ()
//verificar la ruta
server.get("/",(req,res)=>{
    res.status(200).send("Hola mundo servidor de Node.js funcionando con Nodemon!"); //Este es el mensaje que mostrara al final de la comunicacion y se mostrara en el navegador
});
server.use(express.json());//parsear a JSON en el body
server.use ();
server.use((req, res)=>{
    res.status(404).send("Pagina no encontrada");
});


//Iniciar el servidor y escuchar el puerto establecido
server.listen(PORT, ()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

console.log("Generando reservas semanales...");
generarSemanal();

console.log("Realizando borrado mensual...");
borradoMensual(5);

console.log("Tareas ejecutadas.");
