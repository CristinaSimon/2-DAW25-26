import sqlite3 from "sqlite3";
const db = new sqlite3.Database("./local.db");

function crearReserva(data) {
  const sql = `
    INSERT INTO reservas
    (id_sala, id_actividad, id_encargado, fecha, turno, repetir_semana, fecha_fin_repeticion)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  return new Promise((resolve, reject) => {
    db.run(sql, [
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
function generarSemanal() {
  const sql = `SELECT * FROM reservas WHERE repetir_semana = 1`;

  db.all(sql, [], (err, reservas) => {
    if (err) return console.error(err);

    reservas.forEach(r => {
      const fecha = new Date(r.fecha);
      fecha.setDate(fecha.getDate() + 7);
      const fechaNueva = fecha.toISOString().split("T")[0];

      db.get(
        `SELECT 1 FROM reservas WHERE id_sala = ? AND fecha = ? AND turno = ?`,
        [r.id_sala, fechaNueva, r.turno],
        (err, existe) => {
          if (!existe) {
            db.run(
              `INSERT INTO reservas
              (id_sala, id_actividad, id_encargado, fecha, turno, repetir_semana, fecha_fin_repeticion)
              VALUES (?, ?, ?, ?, ?, ?, ?)`,
              [
                r.id_sala,
                r.id_actividad,
                r.id_encargado,
                fechaNueva,
                r.turno,
                r.repetir_semana,
                r.fecha_fin_repeticion
              ]
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

  // 1) Mover reservas a historico
  const copiar = `
    INSERT INTO reservas_historico
    (id_reserva_original, id_sala, id_actividad, id_encargado, fecha, turno,
     repetir_semana, fecha_fin_repeticion, fecha_creacion)
    SELECT id_reserva, id_sala, id_actividad, id_encargado, fecha, turno,
           repetir_semana, fecha_fin_repeticion, fecha_creacion
    FROM reservas
  `;

  db.run(copiar, (err) => {
    if (err) return console.error(err);

    // 2) Borrar reservas activas
    db.run(`DELETE FROM reservas`);
  });
}


export {
  db,
  crearReserva,
  generarSemanal,
  borradoMensual
};