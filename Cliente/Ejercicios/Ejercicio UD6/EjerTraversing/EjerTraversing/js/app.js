"use strict";

const GaleriaMusical = (() => {

    let galeria, statusPanel, capaHeader;
    /**
     * @description Inicializa la aplicación
     */
    const init = () => {
        document.addEventListener('DOMContentLoaded', () => {
            //establecer objetos
            
            galeria = document.querySelectorAll('.gallery');
            statusPanel = document.querySelector('#statusMessages');
            capaHeader = document.querySelector('header'); //capa header  
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
      
         //TODO completar función

    }
    /**
     * @description Muestra el álbum siguiente al que se le ha hecho click
     * @param {Element} boton contiene el botón que se realiza el click
     */
    const mostrarSiguiente = (boton) => {
        //TODO completar función
    }
    /**
     * @description Muestra el nombre del artista y el año de publicación del álbum
     * @param {Element} boton // contiene el botón que se realiza el click
     */
    const mostrarInfoArtista = (boton) => {
        //TODO completar función
    }

     /**
     * @description Cuenta y muestra el número de canciones del álbum
     * @param {Element} boton // contiene el botón que se realiza el click
     */
    const contarCanciones = (boton) => {    
             //TODO completar función
    }

     /**
     * @description Crea el botón para mostrar el primer y último álbum
     * 
     */
    const crearBoton = () => {
        //TODO completar función
    }

    const mostrarPrimeroYUltimo = () => {
      //TODO completar función

    }
    const mostrarMensaje = (mensaje) => {
      //TODO completar función
    }
    return { init };
})();

GaleriaMusical.init();