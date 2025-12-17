CREATE TABLE IF NOT EXISTS salas (
    id_sala INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS encargados (
    id_encargado INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS actividades (
    id_actividad INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    descripcion TEXT
);

CREATE TABLE IF NOT EXISTS reservas (
    id_reserva INTEGER PRIMARY KEY AUTOINCREMENT,
    id_sala INTEGER NOT NULL,
    id_actividad INTEGER,
    id_encargado INTEGER NOT NULL,
    fecha DATE NOT NULL,
    turno TEXT CHECK(turno IN ('mañana','tarde','noche')) NOT NULL,
    repetir_semana INTEGER DEFAULT 0,
    fecha_fin_repeticion DATE,
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(id_sala) REFERENCES salas(id_sala),
    FOREIGN KEY(id_actividad) REFERENCES actividades(id_actividad),
    FOREIGN KEY(id_encargado) REFERENCES encargados(id_encargado)
);


CREATE TABLE IF NOT EXISTS reservas_historico (
  sala TEXT NOT NULL,
  actividad TEXT,
  encargado TEXT NOT NULL,
  fecha DATE NOT NULL,
  turno TEXT NOT NULL,
  dia_semana INTEGER,
  fecha_archivo DATETIME DEFAULT CURRENT_TIMESTAMP,

  UNIQUE (sala, encargado, fecha, turno)
);
