"use strict"
let radio=prompt(`Introduce el varior del radio`),
    area,
    radioCuadrado=(radio*radio);
    
do{
    radio=prompt(`Introduce el varior del radio`);
    if(isNaN(radio)){
    
    area=Math.PI*radioCuadrado
    console.log(area);
    }
    console.log(radio);
    document.writeln(`El area es ${area}`)

}while(isNaN(radio))


