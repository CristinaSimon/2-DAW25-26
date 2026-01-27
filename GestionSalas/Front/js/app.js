"use strict"

// Mostrar u ocultar repetición
document.getElementById("repetir").addEventListener("change", function () {
    const div = document.getElementById("divRepeticion");
    div.style.display = this.checked ? "block" : "none";
});

// Cargar datos desde backend
fetch("/api/opciones")
    .then(r => r.json())
    .then(data => {
        cargarOpciones("salasSelect", data.salas);
        cargarOpciones("encargadosSelect", data.encargados);
        cargarOpciones("actividadesSelect", data.actividades);
        cargarOpciones("diasSemanaSelect", data.dias);
    })
    .catch(err => console.error("Error cargando opciones:", err));


console.log("Generando reservas semanales...");
generarSemanal();

console.log("Realizando borrado mensual...");
borradoMensual(5);

console.log("Tareas ejecutadas.");
