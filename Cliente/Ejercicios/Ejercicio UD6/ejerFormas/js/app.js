"use strict"

const panelcolor=document.querySelector("#colorSelector")
    const colors = [
        { name: 'Azul', class: 'color-blue' },
        { name: 'Rojo', class: 'color-red' },
        { name: 'Verde', class: 'color-green' },
        { name: 'Amarillo', class: 'color-yellow' },
        { name: 'Púrpura', class: 'color-purple' },
        { name: 'Rosa', class: 'color-pink' }
    ];

    const sizes = [
        { name: 'Pequeño', value: 'size-small' },
        { name: 'Mediano', value: 'size-medium' },
        { name: 'Grande', value: 'size-large' }
    ];
   
    const creaBtnColor =()=>{
        const btn=document.createElement("button");
        colors.forEach(color => {
            btn.getAttribute("name", color.name);
            btn.classList.add(color.class);
            btn.getAttribute("height", "30px")
        });
        
        panelcolor.append(btn);


    }

    creaBtnColor()