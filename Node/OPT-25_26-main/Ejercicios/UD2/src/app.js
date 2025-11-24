"use strict"
import express from "express"
import { config } from "dotenv";
import { routerTareas } from "./routers/tareas.routers.js";

config();
const PORT=process.env.PORT || 3000;

const server= express();
const port = 3000

server.get('/',  (req, res) => res.send('Hello World!'))
server.use(express.json());
server.use('/api',routerTareas)
server.use((req, res)=>{
    res.status(404).send('pagina no encontrada');
})

server.listen(PORT, () =>     console.log(`Servidor escuchando en http://localhost:${PORT}`));
