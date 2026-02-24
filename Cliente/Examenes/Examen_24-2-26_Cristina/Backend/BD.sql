-- ============================================================
--  MASCOTAS - Script MySQL
--  Crea la base de datos, la tabla mascotas e inserta datos
-- ============================================================

-- Crear y seleccionar la base de datos
CREATE DATABASE IF NOT EXISTS mascotas
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE mascotas;

-- ============================================================
--  TABLA: mascotas
-- ============================================================
DROP TABLE IF EXISTS mascotas;

CREATE TABLE mascotas (
  id int(11) NOT NULL AUTO_INCREMENT,
  nombre varchar(100) NOT NULL,
  especie varchar(50) NOT NULL,
  edad int(11) NOT NULL,
  precio decimal(10,2) NOT NULL,
  puntuacion int(11) NOT NULL DEFAULT 5,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO mascotas (nombre, especie, edad, precio, puntuacion) VALUES
('Max', 'Perro', 3, 150.00, 5),
('Luna', 'Gato', 2, 80.00, 4),
('Bella', 'Perro', 5, 200.00, 5),
('Oliver', 'Gato', 1, 90.00, 3),
('Charlie', 'Pájaro', 1, 30.00, 4);
