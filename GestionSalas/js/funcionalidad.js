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

function cargarOpciones(id, lista) {
    const select = document.getElementById(id);
    lista.forEach(item => {
        const opt = document.createElement("option");
        opt.value = item.id;
        opt.textContent = item.nombre;
        select.appendChild(opt);
    });
}
