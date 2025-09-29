"use strict"

const fechaActual=Temporal.Now.zonedDateTimeISO();//devuelve los datos del momento segun la zona horaria
const horaActual= fechaActual.toPlainTime();
const actual=fechaActual.toPlainDate();
const fechEs = new Intl.DateTimeFormat('es-ES',{dateStyle: 'long'});
const formateFecha= fechEs.format(actual);
const citaPas= actual.subtract({years: 1, months: 2, days: 13});
console.log(fechEs.format(citaPas));
const diferencia=actual.since(citaPas,{ largestUnit: 'years'});
const diferencia2=actual.since(citaPas,{ largestUnit: 'days'});

document.writeln(`La fecha y hora actual es <strong>${fechaActual} <br></strong> `);
document.writeln(`La fecha actual es: <strong>${formateFecha}<br></strong> `);
document.writeln(`La hora actual es: <strong>${horaActual} <br></strong> `);
document.writeln(`La cita futura sumando los 45 minutos es: <strong>${horaActual.add({minutes: 45})} <br></strong> `)
document.writeln(`La cita pasada restando 1 año, 2 meses y 13 días es: <strong>${citaPas}</strong> <br>`)
document.writeln(`El tiempo transcurrido entre <strong>${citaPas}</strong> y <strong>${actual}</strong> es de <strong>${diferencia.years}</strong> años <strong>${diferencia.months}</strong> meses <strong>${diferencia.days}</strong> dias <br>`);
document.writeln(`El tiempo transcurrido entre <strong>${citaPas}</strong> y <strong>${actual}</strong> son de <strong>${diferencia2.days}</strong> dias <br>`);


