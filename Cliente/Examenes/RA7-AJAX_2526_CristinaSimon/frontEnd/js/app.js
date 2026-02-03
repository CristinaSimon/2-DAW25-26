"use strict";
import { mostrarMensajes } from "./funciones.js";
import { validarPacie, validarCita } from "./valForm.js";
import {
  consulTarjeta,
  consulMedico,
  consulEspecialidades,
} from "./accesoBack.js";
const gestionCitas = (() => {
  let tarjPaciente, info, btnBuscar, especialidad,medico;
  const init = () => {
    document.addEventListener("DOMContentLoaded", () => {
      tarjPaciente = document.querySelector("#tarjetaSanitaria");
      info = document.querySelector(".info");
      btnBuscar = document
        .querySelector(".btnBuscar")
        .addEventListener("click", busqPaciente);
        especialidad=document.querySelector("#especialidad").addEventListener("change", mostrarEspe);
        medico=document.querySelector("#especialidad").addEventListener("change", mostrarMed);
    });
  };

  const busqPaciente = () => {
    let numTarje = tarjPaciente.value;
    console.log(numTarje);
    if (!validarPacie (numTarje) && consulTarjeta(numTarje) ) {
      console.log("entro en 1");
      
        let mensaje = `El paciente es: ${tarjPaciente.apellidos_nombre}`;
        mostrarMensajes(mensaje, "paciente-found");
        document.querySelector(".nuevaCita").classList.remove("ocultar");
      
    } else {
      let mensaje = "paciente no encontrado";
      mostrarMensajes(mensaje, "paciente-notFound");
      document.querySelector(".nuevaCita").classList.add("ocultar");
    }
  };
  const mostrarEspe=()=>{
    consulEspecialidades.forEach(especialidad => {
        const opcion=document.createElement('opcion');
        const val=opcion.setAttribute('value');
        val.textContent=especialidad.nombre_especialidad
        const id= opcion.setAttribute('id');
        id.textContent=especialidad.id_especialidad
        document.querySelector("#especialidad").append(opcion)
    });
  }
  const mostrarMed=()=>{
    const espe=document.querySelector("#especialidad").selelected;
    const med=consulMedico(espe.id)
    med.forEach(medi=>{
        const opcion=document.createElement('opcion');
        const val=opcion.setAttribute('value');
        val.textContent=medi.nombre_completo
        document.querySelector("#medico").append(opcion)


    });

  }

  return {
    init,
  };
})();

gestionCitas.init();
