"use strict"
//importar el modulo http de js
import express from "express";
import {config} from "dotenv";
import {routerUsuarios} from "./routes/usuario.route.js";

config();
const PORT =process.env.PORT || 3000;
console.log(PORT);

const server= express ()
//verificar la ruta
server.get("/",(req,res)=>{
    res.status(200).send("Hola mundo servidor de Node.js funcionando con Nodemon!"); //Este es el mensaje que mostrara al final de la comunicacion y se mostrara en el navegador

});
server.use(express.json());//parsear a JSON en el body

server.use ("/api", routerUsuarios)
server.use((req, res)=>{
    res.status(404).send("Pagina no encontrada");
})


//Iniciar el servidor y escuchar el puerto establecido
server.listen(PORT, ()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});