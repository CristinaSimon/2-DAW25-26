-- ============================================================
-- Base de datos para el examen de Alquiler de Vehículos
-- ============================================================

-- Si existe, la borramos y la volvemos a crear
DROP DATABASE IF EXISTS alquiler_vehiculos;
CREATE DATABASE alquiler_vehiculos CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE alquiler_vehiculos;

-- -------------------------------------------------------
-- Tabla de Categorías (Tipo de vehículo)
-- -------------------------------------------------------
CREATE TABLE categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL -- Económico, Sedán, SUV, Premium
);

-- -------------------------------------------------------
-- Tabla de Marcas
-- -------------------------------------------------------
CREATE TABLE marcas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

-- -------------------------------------------------------
-- Tabla de Modelos (Relacionado con Marca y Categoría)
-- -------------------------------------------------------
CREATE TABLE modelos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    marca_id INT,
    categoria_id INT,
    nombre VARCHAR(100) NOT NULL,
    imagen VARCHAR(255),
    FOREIGN KEY (marca_id) REFERENCES marcas(id),
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

-- -------------------------------------------------------
-- Tabla de Vehículos (Unidades físicas)
-- -------------------------------------------------------
CREATE TABLE vehiculos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    modelo_id INT,
    matricula VARCHAR(10) UNIQUE NOT NULL,
    precio_dia DECIMAL(10, 2) NOT NULL,
    km INT DEFAULT 0,
    anio INT,
    disponible BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (modelo_id) REFERENCES modelos(id)
);

-- -------------------------------------------------------
-- Tabla de Clientes
-- -------------------------------------------------------
CREATE TABLE clientes (
    dni VARCHAR(9) PRIMARY KEY,
    codigo_socio VARCHAR(15) UNIQUE NOT NULL, -- Formato PRM-XXXXXX-YY
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefono VARCHAR(15)
);

-- -------------------------------------------------------
-- Tabla de Reservas
-- -------------------------------------------------------
CREATE TABLE reservas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_dni VARCHAR(9),
    vehiculo_id INT,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    observaciones TEXT,
    FOREIGN KEY (cliente_dni) REFERENCES clientes(dni),
    FOREIGN KEY (vehiculo_id) REFERENCES vehiculos(id)
);

-- ============================================================
-- DATOS DE PRUEBA
-- ============================================================

INSERT INTO categorias (nombre) VALUES
('Económico'), ('Sedán'), ('SUV'), ('Premium');

INSERT INTO marcas (nombre) VALUES
('Fiat'),       -- id 1
('Seat'),       -- id 2
('Volkswagen'), -- id 3
('Toyota'),     -- id 4
('BMW'),        -- id 5
('Audi');       -- id 6

-- 12 modelos (sin cambios en esta parte)
INSERT INTO modelos (marca_id, categoria_id, nombre, imagen) VALUES
(1, 1, '500 Hybrid',        'fiat_500_hybrid.png'),       -- modelo 1
(1, 1, 'Panda Cross',       'fiat_panda_cross.png'),      -- modelo 2
(2, 1, 'Ibiza TSI',         'seat_ibiza_tsi.png'),        -- modelo 3
(2, 2, 'Leon Sportstourer', 'seat_leon_sedan.png'),       -- modelo 4
(3, 2, 'Golf R-Line',       'vw_golf_rline.png'),         -- modelo 5
(3, 3, 'Tiguan Allspace',   'vw_tiguan_suv.png'),         -- modelo 6
(4, 1, 'Corolla Hybrid',    'toyota_corolla_eco.png'),    -- modelo 7
(4, 3, 'RAV4 Hybrid',       'toyota_rav4_hybrid.png'),    -- modelo 8
(5, 4, 'Serie 3 M-Sport',  'bmw_serie3_msport.png'),     -- modelo 9
(5, 4, 'X5 xDrive',        'bmw_x5_premium.png'),        -- modelo 10
(6, 4, 'A4 S-Line',         'audi_a4_sline.png'),         -- modelo 11
(6, 4, 'Q7 TFSI Sport',    'audi_q7_sport.png');         -- modelo 12

-- -------------------------------------------------------
-- Vehículos: 5 unidades por cada modelo (60 en total)
-- -------------------------------------------------------
INSERT INTO vehiculos (modelo_id, matricula, precio_dia, km, anio, disponible) VALUES
-- Fiat 500 Hybrid (modelo 1)
(1,  '1001-AAA', 35.00, 15000, 2022, 1),
(1,  '1002-AAB', 35.00, 22000, 2022, 1),
(1,  '1003-AAC', 32.00, 45000, 2021, 0),
(1,  '1004-AAD', 30.00, 68000, 2020, 1),
(1,  '1005-AAE', 38.00, 5000,  2023, 1),
-- Fiat Panda Cross (modelo 2)
(2,  '2001-BAA', 32.00, 12000, 2022, 1),
(2,  '2002-BAB', 32.00, 25000, 2022, 1),
(2,  '2003-BAC', 28.00, 55000, 2020, 0),
(2,  '2004-BAD', 30.00, 38000, 2021, 1),
(2,  '2005-BAE', 35.00, 8000,  2023, 1),
-- Seat Ibiza TSI (modelo 3)
(3,  '3001-CAA', 40.00, 18000, 2022, 1),
(3,  '3002-CAB', 40.00, 29000, 2022, 1),
(3,  '3003-CAC', 35.00, 62000, 2020, 0),
(3,  '3004-CAD', 38.00, 41000, 2021, 1),
(3,  '3005-CAE', 45.00, 6000,  2023, 1),
-- Seat Leon Sportstourer (modelo 4)
(4,  '4001-DAA', 55.00, 25000, 2022, 1),
(4,  '4002-DAB', 55.00, 32000, 2022, 1),
(4,  '4003-DAC', 48.00, 75000, 2020, 0),
(4,  '4004-DAD', 50.00, 52000, 2021, 1),
(4,  '4005-DAE', 60.00, 12000, 2023, 1),
-- VW Golf R-Line (modelo 5)
(5,  '5001-EAA', 55.00, 22000, 2022, 1),
(5,  '5002-EAB', 55.00, 31000, 2022, 1),
(5,  '5003-EAC', 45.00, 85000, 2019, 0),
(5,  '5004-EAD', 50.00, 58000, 2021, 1),
(5,  '5005-EAE', 65.00, 9000,  2023, 1),
-- VW Tiguan Allspace (modelo 6)
(6,  '6001-FAA', 80.00, 30000, 2022, 1),
(6,  '6002-FAB', 80.00, 42000, 2022, 1),
(6,  '6003-FAC', 70.00, 95000, 2020, 0),
(6,  '6004-FAD', 75.00, 66000, 2021, 1),
(6,  '6005-FAE', 90.00, 15000, 2023, 1),
-- Toyota Corolla Hybrid (modelo 7)
(7,  '7001-GAA', 45.00, 28000, 2022, 1),
(7,  '7002-GAB', 45.00, 39000, 2022, 1),
(7,  '7003-GAC', 38.00, 72000, 2020, 0),
(7,  '7004-GAD', 42.00, 54000, 2021, 1),
(7,  '7005-GAE', 50.00, 11000, 2023, 1),
-- Toyota RAV4 Hybrid (modelo 8)
(8,  '8001-HAA', 75.00, 35000, 2022, 1),
(8,  '8002-HAB', 75.00, 48000, 2022, 1),
(8,  '8003-HAC', 65.00, 88000, 2020, 0),
(8,  '8004-HAD', 70.00, 62000, 2021, 1),
(8,  '8005-HAE', 85.00, 18000, 2023, 1),
-- BMW Serie 3 M-Sport (modelo 9)
(9,  '9001-IAA', 110.00, 21000, 2022, 1),
(9,  '9002-IAB', 110.00, 33000, 2022, 1),
(9,  '9003-IAC', 95.00, 78000, 2020, 0),
(9,  '9004-IAD', 105.00, 49000, 2021, 1),
(9,  '9005-IAE', 125.00, 8000, 2023, 1),
-- BMW X5 xDrive (modelo 10)
(10, '1011-JAA', 140.00, 15000, 2022, 1),
(10, '1012-JAB', 140.00, 28000, 2022, 1),
(10, '1013-JAC', 120.00, 85000, 2020, 0),
(10, '1014-JAD', 130.00, 52000, 2021, 1),
(10, '1015-JAE', 160.00, 10000, 2023, 1),
-- Audi A4 S-Line (modelo 11)
(11, '1111-KAA', 95.00, 24000, 2022, 1),
(11, '1112-KAB', 95.00, 37000, 2022, 1),
(11, '1113-KAC', 85.00, 72000, 2020, 0),
(11, '1114-KAD', 90.00, 46000, 2021, 1),
(11, '1115-KAE', 110.00, 9000, 2023, 1),
-- Audi Q7 TFSI Sport (modelo 12)
(12, '1211-LAA', 150.00, 18000, 2022, 1),
(12, '1212-LAB', 150.00, 29000, 2022, 1),
(12, '1213-LAC', 130.00, 95000, 2020, 0),
(12, '1214-LAD', 140.00, 62000, 2021, 1),
(12, '1215-LAE', 170.00, 12000, 2023, 1);

-- -------------------------------------------------------
-- Clientes
-- -------------------------------------------------------
INSERT INTO clientes (dni, codigo_socio, nombre, email, telefono) VALUES
('12345678Z', 'PRM-JP1234-AA', 'Juan Pérez',    'juan.perez@email.com',    '600123456'),
('87654321X', 'PRM-MG5678-BB', 'María García',  'maria.garcia@email.com',  '611987654'),
('11223344W', 'PRM-CL9012-CC', 'Carlos López',  'carlos.lopez@email.com',  '622345678'),
('44332211V', 'PRM-AM3456-DD', 'Ana Martínez',  'ana.martinez@email.com',  '633456789');

-- -------------------------------------------------------
-- Historial de reservas inicial
-- -------------------------------------------------------
INSERT INTO reservas (cliente_dni, vehiculo_id, fecha_inicio, fecha_fin, total, observaciones) VALUES
('12345678Z',  1, '2026-03-01', '2026-03-03',  105.00, 'Viaje de negocios'),
('12345678Z',  4, '2026-04-10', '2026-04-15',  330.00, 'Vacaciones familiares'),
('87654321X',  6, '2026-03-05', '2026-03-06',  110.00, 'Prueba de vehículo premium'),
('87654321X',  2, '2026-05-20', '2026-05-25',  210.00, 'Fin de semana largo'),
('11223344W', 13, '2026-03-10', '2026-03-12',  110.00, 'Desplazamiento laboral'),
('11223344W', 25, '2026-04-01', '2026-04-05',  440.00, 'Viaje de placer'),
('44332211V', 19, '2026-03-15', '2026-03-16',   75.00, 'Alquiler puntual'),
('44332211V', 31, '2026-05-01', '2026-05-04',  285.00, 'Vacaciones de primavera');