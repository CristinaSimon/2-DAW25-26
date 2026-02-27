

const mostrarMensajes = (mensajeTexto, clase) => {
    const mensaje = document.querySelector("#mensajeEstado")
    return new Promise((resolve, reject) => {
        mensaje.textContent = mensajeTexto;
        mensaje.classList.add(clase);
        mensaje.classList.remove("ocultar");
        setTimeout(() => {
            mensaje.classList.add("ocultar");
            mensaje.classList.remove(clase);
            resolve(true);
        }, 2000);
    })
}


       