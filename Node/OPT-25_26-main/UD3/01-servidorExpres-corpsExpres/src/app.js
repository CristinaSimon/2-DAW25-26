"use strict"
//importar el modulo http de js
import express from "express";
import { config } from "dotenv";
import { routerCursos} from "./routes/cursos.route.js";
import { routerModulo } from "./routes/modulos.route.js";
import { routerAlumnos} from './routes/alumnos.route.js';
import { routerCalificaciones} from './routes/calificaciones.route.js'
import cors from 'cors'

config();
const PORT =process.env.PORT || 3000;
const optCors={
    methods: ['GET', 'POST'],
    allowedHeadrts: ['Content-Type', 'Authorization']
}

const server= express ()
//verificar la ruta
server.get("/",(req,res)=>{
    res.status(200).send("Hola mundo servidor de Node.js funcionando con Nodemon!"); //Este es el mensaje que mostrara al final de la comunicacion y se mostrara en el navegador

});
server.use(express.json());//parsear a JSON en el body
server.use(cors(optCors));

server.use ("/api", routerCursos);
server.use ("/api", routerModulo);
server.use ("/api", routerCalificaciones);
server.use ("/api", routerAlumnos);
server.use((req, res)=>{
    res.status(404).send("Pagina no encontrada");
})


//Iniciar el servidor y escuchar el puerto establecido
server.listen(PORT, ()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});