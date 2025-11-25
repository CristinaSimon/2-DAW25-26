"use strict"
import { titulo, form, tabla } from "./modulocreaccion.js"
 const init = () => {
    titulo();
    form();
    const btnComenzar=document.querySelector("#enviar");
    btnComenzar.addEventListener("click",validadEdad);
    const edad =document.querySelector("#edad")
 }
 const validadEdad=(e)=>{
  e.preventDefault();
  if (edad.vale=="" || edad.value==0){
    alert("La edad no puede ser 0 o vacia");
  }else{
    gestiontabla()
  }
 }
 const gestiontabla=()=>{

  if(edad.value<=12){
    tabla(5)
  }else{
    tabla(10);
  }
  const formmu=document.querySelector("form");
  formmu.classList.add("none");
 }


init();