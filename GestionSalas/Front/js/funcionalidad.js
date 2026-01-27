import express from "express";
import { config } from "dotenv";
// import { cargarOpciones } from "./helpersFront.js";

config();
const PORT =process.env.PORT || 3000;

const server= express();
//verificar la ruta
server.get("/",(req,res)=>{
    res.status(200).send("Hola mundo servidor de Node.js funcionando con Nodemon!"); //Este es el mensaje que mostrara al final de la comunicacion y se mostrara en el navegador
});
server.use(express.json());//parsear a JSON en el body
// server.use ();
server.use((req, res)=>{
    res.status(404).send("Pagina no encontrada");
});


//Iniciar el servidor y escuchar el puerto establecido
server.listen(PORT, ()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

// Cargar datos desde el backend
fetch("/api/opciones")
    .then(r => r.json())
    .then(data => {
        cargarOpciones("salasSelect", data.salas);
        cargarOpciones("encargadosSelect", data.encargados);
        cargarOpciones("actividadesSelect", data.actividades);
        cargarOpciones("diasSemanaSelect", data.dias);
    })
    .catch(err => console.error("Error cargando opciones:", err));

export function cargarOpciones(id, lista) {
    const select = document.getElementById(id);
    lista.forEach(item => {
        const opt = document.createElement("option");
        opt.value = item.id;
        opt.textContent = item.nombre;
        select.appendChild(opt);
    });
}

server.listen(PORT, () => console.log("Servidor en http://localhost:" + PORT));
