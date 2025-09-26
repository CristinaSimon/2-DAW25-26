"use strict"

const fechaActual=Temporal.Now.zonedDateTimeISO();//devuelve los datos del momento segun la zona horaria
const horaActual= fechaActual.toPlainTime();
const actual=fechaActual.toPlainDate();
document.writeln(`Fecha ${actual}<br>`);
document.writeln(`Hora ${horaActual}`);
