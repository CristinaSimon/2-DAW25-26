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
            const param = input.value.trim() != "" ? input.value.trim() : ""
            const response = await fetch(`./php/mostrar.php?perro=${param}`);
            if (!response.ok) {
                throw new Error(`Error en la comunicacion: ${response.status}`)
            }
            const data= await response.json();
             const tabla=document.createElement("table");
            data.forEach(element => {
                
               
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