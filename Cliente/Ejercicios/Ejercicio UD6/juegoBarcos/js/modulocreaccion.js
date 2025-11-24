"use strict";
const tablero=document.querySelector("#juego");
export const titulo=()=>{
    const titulo=document.createElement("h2")
    titulo.textContent='Juego de barcos';
    tablero.append(titulo);
}
export const form=()=>{
    const form=document.createElement("form");
    const input=document.createElement("input")
    input.setAttribute("type", "number");
    input.setAttribute("name", "edad");
    input.setAttribute("placeholder", "introduce la edad");
    const btn= document.createElement("button");
    btn.setAttribute("value", "enviar");
    btn.setAttribute("id", "enviar");
    btn.textContent="enviar"
    form.append(input,btn);
    tablero.append(form)
}
export const tabla =(nfc)=>{
    const tabla=document.createElement("table");
    let idcelda=1;

    for(let c=0; c<nfc; c++){
        const fila=document.createElement("tr");
        for(let f=0; f<nfc; f++){
            const cel=document.createElement("td");
            cel.setAttribute("id",idcelda);
            idcelda++;
            fila.append(cel)
        }
        tabla.append(fila)
    }
    tablero.append(tabla);
}
