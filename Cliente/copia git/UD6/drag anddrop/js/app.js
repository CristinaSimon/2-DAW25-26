"use strict";
const DragAndDropDemo = (() => {
  const init = () => {
    document.addEventListener("DOMContentLoaded", () => {
      const items = document.querySelectorAll(".item");
      const zonas = document.querySelectorAll(".zona");

      items.forEach((item) => item.setAttribute("draggable", true));
      items.forEach((item) => {
        item.addEventListener("dragstart", startDrag);
        item.addEventListener("dragend", endDrag);
        item.addEventListener("dragenter", enterDrag);
        // item.addEventListener("drag", drag)
      });
      zonas.forEach((zona) => {
        zona.addEventListener("dragover", overDrag);
        zona.addEventListener("dragleave", leaveDrag);
        zona.addEventListener("drop", drop);
      });
    });
  };

  /**
   *
   * @param {Event} e evento que realiza cuando comienza drag
   */
  const startDrag = (e) => {
    console.log("starDrag");
    const draggElement = e.target;
    e.dataTransfer.setData("text/plain", draggElement.getAttribute("data-id")); //guardando el id del objeto transferido
    e.target.classList.add("dragging");
  };
  /**
   *
   * @param {Event} e evento que realiza cuando finaliza el drag
   */
  const endDrag = (e) => {
    console.log("endDrag");

    e.target.classList.remove("dragging");
  };
  // const drag=()=>{
  //console.log('drag');
  // }

  /**
   * @description Evento que se realiza cuando un elemento arrastrado entra en una zona de drop
   * @param {Event} e evento que realiza cuando un elemento está sobre una zona de drop
   */
  const enterDrag = (e) => {};
  /**
   * @description Evento que se realiza cuando un elemento arrastrado está sobre una zona de drop
   * @param {Event} e evento que realiza cuando un elemento está sobre una zona de drop
   * @returns {boolean} false para permitir el drop
   */
  const overDrag = (e) => {
    console.log("over Drag");
    e.target.classList.add("drag-over");
    e.preventDefault();
  };
  /**
   * @description Evento que se realiza cuando un elemento arrastrado sale de una zona de drop
   * @param {Event} e evento que realiza cuando un elemento sale de una zona de drop
   */
  const leaveDrag = (e) => {
    console.log("leave Drag");
    e.target.classList.remove("drag-over");
  };
  /**
   * @description Evento que se realiza cuando un elemento arrastrado se suelta en una zona de drop
   * @param {Event} e evento que realiza cuando se suelta el elemento arrastrado en una zona de drop
   */
  const drop = (e) => {
    console.log("drop");
    const id = e.dataTransfer.getData("text/plain");
    console.log(id);
    const borrarMensaje=document.querySelector('.empty-message');
    if(borrarMensaje){
        borrarMensaje.remove();
    }
    const elemento=document.querySelector(`.item[data-id= '${id}']`);
    if(elemento.getAttribute("data-copy")=="true"){
        elemento.setAttribute("draggable",false)
        const nuevoElemento=elemento.cloneNode(true);
        zona.append(nuevoElemento);
        nuevoElemento.classList.remove("dragging")
    }else{    
        zona.append(elemento);

    }
    const zona =document.querySelector('.zona')
  };
  const resetDemo = () => {};
  return {
    init,
  };
})();

DragAndDropDemo.init();
