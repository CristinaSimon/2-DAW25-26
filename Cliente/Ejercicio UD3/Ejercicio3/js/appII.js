"use strict"
const fechaActual=Temporal.Now.zonedDateTimeISO();
    min=fechaActual.day,
    max=30,
    numAleatorio= Math.floor(Math.random() * (max - min + 1)) + min;//Numero aleatorio entre el día actual y un num aleatorio igual o inferior a 30
    const diasRestantes=numAleatorio-min;
    console.log(fechaActual);

document.writeln(`La fecha actual es ${fechaActual} <br>`);
document.writeln(`La fecha del evento es ${numAleatorio} / ${fechaActual.getMonth()+1} / ${fechaActual.getFullYear()} <br>`);
if (diasRestantes==0){
    document.writeln(`Días que faltan para el evento: ¡Es hoy!`);
}else{
    document.writeln(`Días que faltan para el evento: ${diasRestantes}`);

}
