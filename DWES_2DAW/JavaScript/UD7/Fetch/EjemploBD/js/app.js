"use strict";
const AJAXFetch = (() => {
    let spinner, input, boton, tabla;
    const init = () => {
        document.addEventListener("DOMContentLoaded", () => {
            //establecer los elementos mensajes, spinner
            boton = document.querySelector("#buscarChip");
            input = document.querySelector("#inputChip")
            spinner = document.querySelector("#spinner");
            tabla= document.querySelector("#tabla-body")
            //establecer los elementos a los botones
            boton.addEventListener("click", mostrarPerros);
            //ocultar el spinner 
            spinner.classList.add("ocultar");
        });
    };

    const mostrarPerros = async () => {

        try {
            //eliminar la filas de la tabla
            document.querySelectorAll("#tabla-body tr").forEach(element=>element.remove());
            const param = input.value.trim() != "" ? input.value.trim() : ""
            await mostarSpinner()
            const response = await fetch(`./php/mostrar.php?perro=${param}`);
            if (!response.ok) {
                throw new Error(`Error en la comunicacion: ${response.status}`)
            }
            const data= await response.json();
            data.data.forEach(element => {
                const fila =document.createElement("tr");
                const chip =document.createElement("td");
                chip.textContent=data.chip;
                const nombre =document.createElement("td");
                nombre.textContent=data.nombre;
                const raza =document.createElement("td");
                raza.textContent=data.raza;
                const fechNac =document.createElement("td");
                fechNac.textContent=data.fechaNacimiento;
                fila.append(chip, nombre, raza, fechNac);
                element.append(fila);
            });
            console.log(data);

        } catch (error) {
            console.log(error);
        }
    }
    /**
     * @function mostrarSpinner
     * @description mostrar spinner
     * @returns 
     */
    const mostarSpinner = () => {
        return new Promise((res, rej) => {
            spinner.classList.remove("ocultar")
            setTimeout(() => {
                spinner.classList.add("ocultar");
                res(true);
            }, 2000)

        })
    }
    return {
        init,
    };
})();

AJAXFetch.init();