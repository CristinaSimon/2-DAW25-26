"use strict"
const fechaActual=Temporal.Now.zonedDateTimeISO(),
    fechaAc=fechaActual.toLocaleString('es-ES', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    }),
    min=fechaActual.day,
    max=30,
    numAleatorio= Math.floor(Math.random() * (max - min + 1)) + min;//Numero aleatorio entre el día actual y un num aleatorio igual o inferior a 30
    const diasRestantes=numAleatorio-min,
    fechaEvento=new Temporal.PlainDate(fechaActual.year, fechaActual.month, numAleatorio);
    console.log(fechaActual);

document.writeln(`La fecha actual es ${fechaAc} <br>`);
document.writeln(`La fecha del evento es ${fechaEvento} <br>`);
if (diasRestantes==0){
    document.writeln(`Días que faltan para el evento: ¡Es hoy!`);
}else{
    document.writeln(`Días que faltan para el evento: ${diasRestantes}`);

}
