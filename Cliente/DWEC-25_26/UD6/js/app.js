"use strict";
const ManejoDOM = (() => {
  const init = () => {
    document.addEventListener("DOMContentLoaded", () => {
      document
        .querySelector("#btn-add-classlist")
        .addEventListener("click", addClassList);
      document
        .querySelector("#btn-add-classname")
        .addEventListener("click", addClassName);
      document
        .querySelector("#btn-del-classlist")
        .addEventListener("click", delClassList);
      document
        .querySelector("#btn-del-classname")
        .addEventListener("click", delClassName);
      document
        .querySelector("#btn-hideShow-classlist")
        .addEventListener("click", hideShow);
      document
        .querySelector("#btn-add-item")
        .addEventListener("click", addCaracteristica);
      document
        .querySelector("#btn-addPos-item")
        .addEventListener("click", addPostCaracteristicas);
      document
        .querySelector("#btn-remove-item")
        .addEventListener("click", delCaracteristicas);
      document
        .querySelector("#btn-update-item")
        .addEventListener("click", updateCaracteristicas);
      document
        .querySelector("#btn-traversing")
        .addEventListener("click", transversing);
      document
        .querySelector("#btn-show-tree")
        .addEventListener("click", showTree);
    });
  };
  /**
   * @description añade varias clases al elemento con classList
   */
  const addClassList = () => {
    const article = document.querySelector("#article-1");
    article.classList.add("highlight", "rounded", "shadow");
  };
  /**
   * @description añade varias clases al elemento con className
   */
  const addClassName = () => {
    const article = document.querySelector("#article-1");
    article.className = "highlight rounded shadow";
  };
  /**
   * @description elimina varias clases al elemento con classList
   */
  const delClassList = () => {
    const article = document.querySelector("#article-1");
    const clases = article.classList;
    article.classList.remove(clases[clases.length] - 1);
    // article.classList.remove([...clases].pop());
  };
  /**
   * @description elimina varias clases al elemento con className
   */
  const delClassName = () => {
    const article = document.querySelector("#article-1");
    const clases = article.className.split(" ");
    if (clases.length != 0) {
      clases.pop();
    }
  };
  /**
   * @description para ocultar y mostrar un apartado
   */
  const hideShow = () => {
    const article = document.querySelector("#article-1");
    article.classList.toggle("ocultar");
  };
  /**
   * @description añadir caracteristicas a la lista
   */
  const addCaracteristica = () => {
    const list = document.querySelector("#caracteristicas-list");
    const nuevoItem = document.createElement("li");
    // const numItem=document.querySelectorAll("#caracteristicas-list>li").length +1
    const numItem = list.children.length + 1;
    // const texto= document.createTextNode("Caracteristica");
    // //añadir el texto al nodo li
    // nuevoItem.appendChild(texto);
    // //añadir el nuevo elemento a la lista
    // list.appendChild(nuevoItem);//añadir el
    nuevoItem.textContent = `Caracteristicas ${numItem}`;
    list.append(nuevoItem);
    // list.prepend(nuevoItem);
    // list.before(nuevoItem);
    // list.after(nuevoItem);
    // list.insertAdjacentElement("beforeend", nuevoItem);
    // list.insertAdjacentHTML("beforeend", `<li>Caracteristicas ${nuevoItem}</li>`);
  };
  /**
   * @description añadir li a la lista de caracteristicas
   */
  const addPostCaracteristicas = () => {
    const list = document.querySelector("#caracteristicas-list");
    const nuevoItem = document.createElement("li");
    const numItem = list.children.length;
    nuevoItem.textContent = `Caracteristicas ${numItem + 1}`;
    const posicion = prompt(`Introduzca posicion del 1 al ${numItem}`);
    const nodoRef = list.children[posicion - 1];
    if (posicion > nuevoItem) {
      list.append(nuevoItem);
    } else {
      list.insertBefore(nuevoItem, nodoRef);
    }
  };
  /**
   * @description eliminar un elemento li de la lista
   */
  const delCaracteristicas = () => {
    const list = document.querySelector("#caracteristicas-list");
    const nuevoItem = document.createElement("li");
    const numItem = list.children.length;
  };
  /**
   * @description metodo para actualizar las caracteristicas
   */
  const updateCaracteristicas = () => {
    const list = document.querySelector("#caracteristicas-list");
    const numItem = list.children.length;
    const posicion = prompt(`Introduzca posicion del 1 al ${numItem}`);

    const nodoRef =
      posicion > numItem
        ? list.children[numItem - 1]
        : list.children[posicion - 1];
    const nuevoItem = document.createElement("li");
  };
  /**
   * @description metodo para  acceder a distintos elementos usando el transversin del dom
   */
  const transversing = () => {
    const list = document.querySelector("#caracteristicas-list");
    console.log(`Hijos ->childNodes`, list.childNodes); 
    console.log(`Hijos ->children`, list.children);
    console.log(`Primer hijo ->firstChild`, list.firstChild);//acceso al primer nodo hijo
    console.log(`Primer hijo ->firstElementChild`, list.firstElementChild);//acceso al primer nodo hijo del tipo element
    console.log(`Ultimo hijo ->firstChild`, list.lastChild);//acceso al ultimo nodo hijo
    console.log(`Ultimo hijo ->firstElementChild`, list.lastElementChild);//acceso al ultimo nodo hijo del tipo element
    console.log(`Padre ->parentNode`, list.parentNode);//acceso al padre
    console.log(`Padre ->parentElement`, list.parentElement);//acceso al padre
    console.log(`Hermano Siguiente ->nextSibiling`, list.nextSibling);//acceso al hermano Siguiente
    console.log(`Hermano Siguiente ->nextElementSibiling`, list.nextElementSibling);//acceso al hermano Siguiente
    console.log(`Hermano Anterior ->previusSibiling`, list.previousSibling);//acceso al hermano Anterior
    console.log(`Hermano Anterior ->previusElementSibling`, list.previousElementSibling);//acceso al hermano Anterior

  };
  const recursiveTree=(nodo)=>{
    console.log(`Nodo->${nodo.nodeName} Tipo-> ${nodo.nodeType} Valor -> ${nodo.nodeValue}`);
    [...nodo.children].forEach(nodoHijo=>{
      recursiveTree(nodoHijo);
    })
  }
  /**
   * @description muestra el arbol DOM en la consola
   */
  const showTree=()=>{
    recursiveTree(document.documentElement)
  }

  return {
    init,
  };
})();

ManejoDOM.init();
