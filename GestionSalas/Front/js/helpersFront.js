export function cargarOpciones(id, lista) {
    const select = document.getElementById(id);
    select.innerHTML = ""; // limpiar antes de cargar

    lista.forEach(item => {
        const opt = document.createElement("option");
        opt.value = item.id;
        opt.textContent = item.nombre;
        select.appendChild(opt);
    });
}
