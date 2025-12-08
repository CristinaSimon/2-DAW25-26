import express from "express";
import { config } from "dotenv";
import { cargarOpciones } from "./helpersFront.js";
import { routerReservas } from "../src/routes/reservas.router.js";
import { routerSalas } from "../src/routes/salas.router.js";
import { routerEncargados } from "../src/routes/encargados.router.js";
import { routerHistorico } from "../src/routes/reserva_historico.router.js";
import { routerActividades } from "../src/routes/actividades.router.js";
import { generarSemanal, borradoMensual } from "../src/bbdd/bbdd.js";

config();
// const PORT =process.env.PORT || 3000;
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
// Mostrar u ocultar la sección de repetición semanal
document.getElementById("repetir").addEventListener("change", function () {
    document.getElementById("divRepeticion").style.display =
        this.checked ? "block" : "none";
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
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

// Servir carpeta public
app.use(express.static(path.join(__dirname, "../public")));

// Ruta API
app.get("/api/opciones", (req, res) => {
    res.json({
        salas: [
            { id: 1, nombre: "Sala A" },
            { id: 2, nombre: "Sala B" }
        ],
        encargados: [
            { id: 1, nombre: "Juan" },
            { id: 2, nombre: "María" }
        ],
        actividades: [
            { id: 1, nombre: "Yoga" },
            { id: 2, nombre: "Teatro" }
        ],
        dias: [
            { id: 1, nombre: "Lunes" },
            { id: 2, nombre: "Martes" }
        ]
    });
});

const PORT = 3000;
app.listen(PORT, () => console.log("Servidor en http://localhost:" + PORT));
