"use strict";

const GaleriaMusical = (() => {

    let galeria, statusPanel, capaHeader, btnprev, btnnex, btnartis, btngen, btncont;
    /**
     * @description Inicializa la aplicación
     */
    const init = () => {
        document.addEventListener('DOMContentLoaded', () => {
            //establecer objetos           
            galeria = document.querySelectorAll('.gallery');
            statusPanel = document.querySelector('#statusMessages');
            capaHeader = document.querySelector('header'); //capa header  
            btnprev = document.querySelectorAll(".btn-prev")
            btnnex = document.querySelectorAll(".btn-next")
            btnartis = document.querySelectorAll(".btn-artist");
            btngen = document.querySelectorAll(".btn-gener");
            btncont = document.querySelectorAll(".btn-contar");

            // gestion de eventos

            btnnex.forEach(e => {
                e.addEventListener("click", ()=>{
                    mostrarSiguiente(e)
                })
            });
            btnprev.forEach(e => {
                e.addEventListener("click", () => {
                    mostrarAnterior(e)
                })
            });
            btnartis.forEach(e=>{
                e.addEventListener("click", ()=>{
                    mostrarInfoArtista(e)
                })
            })
            btngen.forEach(e=>{
                e.addEventListener("click", ()=>{
                    mostrarMismoGenero(e)
                })
            })
            btncont.forEach(e=>{
                e.addEventListener("click", ()=>{
                    contarCanciones(e)
                })
            })

            crearBoton();
            //TODO añadir eventos a los botones de cada álbum
        })
    }
    /**
     * @description Muestra los álbumes del mismo género que el álbum seleccionado
     * @param {Element} boton contine el botón que se realiza el click
     */
    const mostrarMismoGenero = (boton) => {


        //TODO completar función

    }
    /**
     * @description Muestra el álbum anterior al que se le ha hecho click
     * @param {Element} boton contiene el botón que se realiza el click
     */
    const mostrarAnterior = (boton) => {

        //buscamos el padre
        const prim_padre = boton.parentElement.parentElement;
       
        const anterior = prim_padre.previousElementSibling;
        if (anterior) {
           prim_padre.classList.remove("highlight")
           anterior.classList.add("highlight")
        } else {
            mostrarMensaje('No hay album anterior')

        }


    }
    /**
     * @description Muestra el álbum siguiente al que se le ha hecho click
     * @param {Element} boton contiene el botón que se realiza el click
     */
    const mostrarSiguiente = (boton) => {

        const prim_padre = boton.parentElement.parentElement;
       
        const siguiente = prim_padre.nextElementSibling;
        if (siguiente) {
           prim_padre.classList.remove("highlight")
           siguiente.classList.add("highlight")
        } else {
            mostrarMensaje('No hay album siguiente')

        }

    }
    /**
     * @description Muestra el nombre del artista y el año de publicación del álbum
     * @param {Element} boton // contiene el botón que se realiza el click
     */
    const mostrarInfoArtista = (boton) => {
                const prim_padre = boton.parentElement.parentElement;

        //TODO completar función
    }

    /**
    * @description Cuenta y muestra el número de canciones del álbum
    * @param {Element} boton // contiene el botón que se realiza el click
    */
    const contarCanciones = (boton) => {
        const prim_padre = boton.parentElement.parentElement;

        //TODO completar función
    }

    /**
    * @description Crea el botón para mostrar el primer y último álbum
    * 
    */
    const crearBoton = () => {
        const btn= document.createElement("button")
        btn.textContent="primer y ultimo elemento";
        btn.addEventListener("click", mostrarPrimeroYUltimo)
    }

    const mostrarPrimeroYUltimo = () => {


        //TODO completar función

    }
    const mostrarMensaje = (mensaje) => {
        const pTxt=document.createElement("p");
        pTxt.classList.add("status-message");
        pTxt.textContent=mensaje;
        if(statusPanel.children.length ==6){
            statusPanel.children[1].remove();
        }
        statusPanel.append(pTxt);
    }
    return { init };
})();

GaleriaMusical.init();