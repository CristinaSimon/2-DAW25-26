"use strict";
const AJAXFetch = (() => {
  let spinner, cursos;
  const init = () => {
    document.addEventListener("DOMContentLoaded", () => {
      //establecer los elementos spinner
      spinner = document.querySelector("#spinner");
      cursos= document.querySelector("#cursos");
      //ocultar el spinner 
      spinner.classList.add("ocultar");
      cursos.addEventListener("change", mostarModulos)
    });
  };

  const mostarModulos = async() => {
    await mostarSpinner();
    try {
      const response= await fetch("./data/Ejemplo2.xml")
      if (!response.ok) {
          throw new Error(`Error en la comunicación ${response.status}`);
        }
        const data= await response.text();
        //parsear los datos xml
        const parse= new DOMParser();
        const xmlDoc=parse.parseFromString( data, "text/xml");
        borrarModulos();
        xmlDoc.querySelectorAll("curso").forEach((element,index)=>{
          if (index==cursos.value){
            element.querySelectorAll("asig").forEach(mod=>{
              const modulo= document.createElement("option");
              modulo.setAttribute("value", mod.textContent);
              modulo.textContent=mod.textContent
              //añadir la opcion en el select de modulos
              document.querySelector("#modulos").append(modulo);
            })
          }
        })
        console.log(data);
        //cargar los datos al select de modulos


    } catch (error) {
      console.log(error);
    }
  };
  const borrarModulos=()=>{
    //Seleccionar todas las opcines de modulo, excepto la primera
    const opciones= document.querySelector("#modulos").querySelectorAll("option:not(:first-child)");
    opciones.forEach(element=>{element.remove()})
  };
  const mostarSpinner=()=>{
    return new Promise((res, rej) => {
        spinner.classList.remove("ocultar")
        setTimeout(()=>{
            spinner.classList.add("ocultar");
            res(true);
        },2000)    
    })
  }
  return {
    init,
  };
})();

AJAXFetch.init();