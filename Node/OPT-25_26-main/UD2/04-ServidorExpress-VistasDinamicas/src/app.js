"use strict"
//importar el modulo http de js
import express from "express";
import {config} from "dotenv";

config();
const PORT =process.env.PORT || 3000;
console.log(PORT);

const server= express ()
//configurar donde se encuentran las vistas
server.set("view engine", "ejs")
server.set("views", "./src/views")//se le indica a Express donde buscar las plantillas 
//verificar la ruta
server.get("/",(req,res)=>{
    res.status(200).send("Hola mundo servidor de Node.js funcionando con Nodemon!"); //Este es el mensaje que mostrara al final de la comunicacion y se mostrara en el navegador

});
server.get("/about",(req,res)=>{
    // res.status(200).send("Hola desde la pagina about")
    res.render("inicio", {
        titulo: 'Pagina de inicio',
        nombre: 'Sofia contreras'
    })
})
server.use((req, res)=>{
    res.status(404).send("Pagina no encontrada")
})


//Iniciar el servidor y escuchar el puerto establecido
server.listen(PORT, ()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});