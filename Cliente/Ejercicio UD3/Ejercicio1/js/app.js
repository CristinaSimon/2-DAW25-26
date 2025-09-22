"use strict"
let ventana;
function crearVent(){
    if (ventana==undefined || ventana.closed){//devuelve true si está cerrada y false se está abierta
        ventana = window.open("", "Ventana segundaria", "width=400,height=400");
        ventana.document.writeln("<h1>Bienvenido a la nueva ventana de 400x400 píxeles</h1>")
    }else{
    alert("La ventana secundaria ya está abierta")
    }
}

function resimensionarVent(){
    ventana.resizeTo("750","350");
    ventana.document.writeln("<h2>Ventana redimensionada a 750x350 px</h2>");
    ventana.focus
}

function moverVent(){
    let ancho=outerWidth, 
        alto=outerHeight, 
        altoVent= ventana.outerHeight, 
        anchoVent=ventana.outerWidth;
    ventana.moveBy((alto/2),(ancho/2));
    ventana.focus
}

function cerrarVent(){
    if (ventana==undefined || ventana.closed) {
        self.close(); // cerrar ventana principal
    }else if (confirm(`Ventana secundaria abierta\n¿Quiere cerrar la ventana secundaria?`)){
        ventana.close(); //cerrar ventana secundaria
        self.close(); //cerrar ventana principal
    }else{
        ventana.focus();
    }
}