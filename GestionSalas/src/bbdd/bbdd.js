import sqlite3 from "sqlite3";
const bd = new sqlite3.Database("./local.bd");

function crearReserva(data) {
  const sql = `
    INSERT INTO reservas
    (id_sala, id_actividad, id_encargado, fecha, turno, repetir_semana, fecha_fin_repeticion)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  return new Promise((resolve, reject) => {
    bd.run(sql, [
      data.id_sala,
      data.id_actividad,
      data.id_encargado,
      data.fecha,
      data.turno,
      data.repetir_semana ? 1 : 0,
      data.fecha_fin_repeticion || null
    ], function(err) {
      if (err) reject(err);
      resolve(this.lastID);
    });
  });
}

export function generarSemanal() {
  const sql = `SELECT * FROM reservas WHERE repetir_semana = 1`;

  bd.all(sql, [], (err, reservas) => {
    if (err) return console.error("Error leyendo reservas:", err);

    reservas.forEach(r => {
      let fecha = new Date(r.fecha);

      const targetDay = r.dia_semana !== null && r.dia_semana !== undefined
                        ? r.dia_semana
                        : fecha.getDay();

      fecha.setDate(fecha.getDate() + 7);
      while (fecha.getDay() !== targetDay) {
        fecha.setDate(fecha.getDate() + 1);
      }

      if (r.fecha_fin_repeticion && new Date(r.fecha_fin_repeticion) < fecha) {
        return;
      }

      const fechaNueva = fecha.toISOString().split("T")[0];

      bd.get(
        `SELECT 1 FROM reservas WHERE id_sala = ? AND fecha = ? AND turno = ?`,
        [r.id_sala, fechaNueva, r.turno],
        (err, existe) => {
          if (err) return console.error(err);

          if (!existe) {
            bd.run(
              `INSERT INTO reservas
              (id_sala, id_actividad, id_encargado, fecha, turno, repetir_semana, dia_semana, fecha_fin_repeticion)
              VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
              [
                r.id_sala,
                r.id_actividad,
                r.id_encargado,
                fechaNueva,
                r.turno,
                r.repetir_semana,
                r.dia_semana,
                r.fecha_fin_repeticion
              ],
              err => {
                if (err) console.error("Error insertando reserva semanal:", err);
                else console.log(`Reserva repetida creada para ${fechaNueva}`);
              }
            );
          }
        }
      );
    });
  });
}

function borradoMensual(diaLimpieza = 5) {
  const hoy = new Date();
  const dia = hoy.getDate();

  if (dia !== diaLimpieza) return;

  const copiar = `
    INSERT INTO reservas_historico
    (id_reserva_original, id_sala, id_actividad, id_encargado, fecha, turno,
     repetir_semana, fecha_fin_repeticion, fecha_creacion)
    SELECT id_reserva, id_sala, id_actividad, id_encargado, fecha, turno,
           repetir_semana, fecha_fin_repeticion, fecha_creacion
    FROM reservas
  `;

  bd.run(copiar, (err) => {
    if (err) return console.error(err);

    bd.run(`DELETE FROM reservas`);
  });
}

export {
  bd,
  crearReserva,
  borradoMensual
};
