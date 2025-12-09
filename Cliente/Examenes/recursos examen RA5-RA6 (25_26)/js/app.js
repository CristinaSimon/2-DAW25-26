"use strict"
import { createElement } from "react";
    import { expNombre, expDniNie } from "./modulo.js";
const gestorTareas=(()=>{
    let nom, errNom, dni, errDni,btnReg, gestor, form, user,lAlta,lMedia,lBaja,btnAgr,prioridad,titulo
    /**
     * @function init
     * @description Funcion para iniciar aquello que este cargado cuando el DOM este cargado
     */
    const init=()=>{
        document.addEventListener("DOMContentLoaded", () => {
            nom=document.querySelector("#nombre")
            errNom=document.querySelector("#error-nombre");
            dni=document.querySelector("#dni")
            errDni=document.querySelector("#error-dni");
            btnReg=document.querySelector(".reg");
            gestor=document.querySelector("#seccion-gestor");
            form=document.querySelector("#seccion-registro")
            user=document.querySelector("#nombre-usuario");
            lAlta=document.querySelector("#lista-alta");
            lMedia=document.querySelector("#lista-media");
            lBaja=document.querySelector("#lista-baja");
            btnAgr=document.querySelector("#btnAgregar");
            prioridad=document.querySelector("#selectPrioridad");
            titulo=document.querySelector("#titulo")

            //añadir atributos, eventos y demas
            nom.setAttribute("pattern", expNombre);
            dni.setAttribute("pattern", expDniNie); 

            nom.addEventListener("input", validarNom);            
            dni.addEventListener("input", validarDni);

            btnAgr.addEventListener("click", addTarea)

        });

    }

/**
 * @description valida la expresión regular del nombre
 * @param {evento} e 
 */
  const validarNom = (e) => {
    // e.preventDefault();
    // const dat=e.target.value
    // if (dat.checkValidity){
    //   errNom.textContent="Dato Correcto"
    //   console.log("soy correcto en el 1º");
    // }else if (dat.valueMissing){
    //    errNom.textContent="Dato Requerido"
    //          console.log("soy correcto en el 2º");

    // }else if (dat.patternMismatch){
    //    errNom.textContent="Formato erróneo"
    //          console.log("soy correcto en el 3º");

    // } 
    if(nom.value !==""){
        habilitarBtn()
    }else{
        errNom.textContent="Dato Requerido"
    }
    
  };
  /**
 * @description valida la expresión regular del DNI
 * @param {evento} e 
 */
  const validarDni = (e) => {
    // e.preventDefault();
    // if (dni.validity.valid){
    //   errDni.textContent="Dato Correcto"
    // }else if (dni.validity.valueMissing){
    //    errDni.textContent="Dato Requerido"
    // }else if (dni.validity.patternMismatch){
    //    errDni.textContent="Formato erróneo"
    // }   
        if(dni.value !==""){
        habilitarBtn()
    }else{
        errNom.textContent="Dato Requerido"
    }

  };
  /**
   * @function habilitarBtn
   * @description Funcion para habilitar el btn y acceder a  el gestor de tareas
   */
  const habilitarBtn=()=>{
    if ( nom.value!=="" && dni.value!==""){
        console.log("Estoy entrando para habilitar el btn");
        // btnReg.setAttribute("disabled", false);
        // btnReg.classList.add("activo");
        btnReg.style.display="block";
        gestor.classList.add("activa");
        form.classList.remove("activa");
        user.textContent=nom.value;
    }
  }
  /**
   * @function addTarea
   * @description Funcion para crear y añadir tarea a la lista correspondiente
   */
  const addTarea=()=>{
    if(titulo!==""){
      const tarea=createElement("div");
      tarea.textContent=titulo.value;
      const btn =createElement("button");
      btn.textContent="Eliminar"
      const check = document.createElement("input")
      check.setAttribute("type", "checkbox");
      check.setAttribute("id", `${titulo}` );
    }
    
  }



    return{
        init
    }

})();

gestorTareas.init();