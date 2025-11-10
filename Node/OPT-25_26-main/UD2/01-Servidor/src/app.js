"use strict"
//importar el modulo http de js
import http from "http";
const PORT =3000;
//crear servidor

const server= http.createServer((req,res)=>{
//verificar la ruta
if (req.url==="/"){//esta vacio
    res.statusCode=200;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("Hola mundo servidor de Node.js funcionando con Nodemon!"); //Este es el mensaje que mostrara al final de la comunicacion y se mostrara en el navegador
}else if(req.url==="/about"){
    res.statusCode=200;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("Hola desde la pagina about"); //Este es el mensaje que mostrara al final de la comunicacion y se mostrara en el navegador

}else{
        res.statusCode=404;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("Pagina no encontrada"); //Este es el mensaje que mostrara al final de la comunicacion y se mostrara en el navegador

}
});

//Iniciar el servidor y escuchar el puerto establecido
server.listen(PORT, ()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});