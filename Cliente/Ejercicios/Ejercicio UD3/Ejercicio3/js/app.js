"use strict"
const fechaActual=new Date(),
    min=fechaActual.getDate(),
    max=30,
    numAleatorio= Math.floor(Math.random() * (max - min + 1)) + min;//Numero aleatorio entre el día actual y un num aleatorio igual o inferior a 30
    const diasRestantes=numAleatorio-min;

document.writeln(`La fecha actual es ${fechaActual.toLocaleDateString()} <br>`);
document.writeln(`La fecha del evento es ${numAleatorio} / ${fechaActual.getMonth()+1} / ${fechaActual.getFullYear()} <br>`);
if (diasRestantes==0){
    document.writeln(`Días que faltan para el evento: ¡Es hoy!`);
}else{
    document.writeln(`Días que faltan para el evento: ${diasRestantes}`);

}
