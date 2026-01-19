SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

-- =====================================================
-- Base de datos: inmobiliaria
-- =====================================================
DROP SCHEMA IF EXISTS inmobiliaria;
CREATE SCHEMA inmobiliaria DEFAULT CHARACTER SET utf8;
USE inmobiliaria;

-- =====================================================
-- Tabla: zonas
-- =====================================================
CREATE TABLE IF NOT EXISTS `zonas` (
  `idzona` SMALLINT(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`idzona`)
) ENGINE=InnoDB DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;

-- =====================================================
-- Tabla: inmuebles
-- =====================================================
CREATE TABLE IF NOT EXISTS `inmuebles` (
  `idinmueble` SMALLINT(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  `zona` SMALLINT(5) UNSIGNED NOT NULL,
  `tipo_inmueble` ENUM('Piso', 'Chalet', 'Casa', 'Adosado', 'Duplex', 'Atico', 'Estudio', 'Loft') NOT NULL,
  `domicilio` VARCHAR(100) NOT NULL,
  `habitaciones` SMALLINT(2) UNSIGNED NOT NULL,
  `banos` SMALLINT(2) UNSIGNED NOT NULL,
  `metros_cuadrados` DECIMAL(6,2) UNSIGNED NOT NULL,
  `precio` DECIMAL(8,2) UNSIGNED NOT NULL,
  `reservado` TINYINT(1) UNSIGNED NOT NULL DEFAULT 0 COMMENT '0=Disponible, 1=Reservado',
  PRIMARY KEY (`idinmueble`),
  FOREIGN KEY (`zona`) REFERENCES `zonas`(`idzona`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;

-- =====================================================
-- Tabla: reservas
-- =====================================================
CREATE TABLE IF NOT EXISTS `reservas` (
  `idreserva` SMALLINT(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  `dni` VARCHAR(9) NOT NULL,
  `idinmueble` SMALLINT(5) UNSIGNED NOT NULL,
  `fecha` DATE NOT NULL,
  PRIMARY KEY (`idreserva`),
  FOREIGN KEY (`idinmueble`) REFERENCES `inmuebles`(`idinmueble`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;

-- =====================================================
-- Datos para la tabla: zonas (Barrios de Córdoba, España)
-- =====================================================
INSERT INTO `zonas` (`idzona`, `descripcion`) VALUES
(1, 'Centro'),
(2, 'Ciudad Jardín'),
(3, 'Judería'),
(4, 'Sector Sur'),
(5, 'Arcangel'),
(6, 'Levante'),
(7, 'Poniente'),
(8, 'Fátima'),
(9, 'Huerta de la Reina'),
(10, 'Viñuela-Rescatado'),
(11, 'Santa Rosa'),
(12, 'Brillante'),
(13, 'Cerro Muriano'),
(14, 'Arruzafilla'),
(15, 'Guadalquivir');

-- =====================================================
-- Datos para la tabla: inmuebles (5-10 por barrio)
-- =====================================================
INSERT INTO `inmuebles` (`idinmueble`, `zona`, `tipo_inmueble`, `domicilio`, `habitaciones`, `banos`, `metros_cuadrados`, `precio`) VALUES
-- CENTRO (zona 1) - 8 inmuebles
(1, 1, 'Piso', 'C/ Gondomar, 32', 3, 2, 95.00, 950.00),
(2, 1, 'Estudio', 'Avda/ Gran Capitán, 15', 1, 1, 50.00, 600.00),
(3, 1, 'Piso', 'C/ Cruz Conde, 8', 2, 1, 70.00, 750.00),
(4, 1, 'Piso', 'C/ Claudio Marcelo, 22', 3, 2, 110.00, 1100.00),
(5, 1, 'Atico', 'Plaza de las Tendillas, 5', 4, 2, 130.00, 1300.00),
(6, 1, 'Piso', 'C/ Concepción, 18', 2, 1, 65.00, 680.00),
(7, 1, 'Piso', 'C/ San Fernando, 41', 3, 2, 90.00, 900.00),
(8, 1, 'Estudio', 'C/ Diario Córdoba, 12', 1, 1, 45.00, 550.00),

-- CIUDAD JARDÍN (zona 2) - 7 inmuebles
(9, 2, 'Piso', 'C/ Pintor López Mezquita, 2', 2, 1, 75.50, 650.00),
(10, 2, 'Piso', 'C/ Historiador Díaz del Moral, 7', 2, 1, 70.00, 625.00),
(11, 2, 'Piso', 'Avda/ América, 80', 2, 1, 80.00, 675.00),
(12, 2, 'Chalet', 'C/ Doctor Jiménez Díaz, 33', 3, 2, 95.00, 750.00),
(13, 2, 'Piso', 'C/ Músico Cristóbal de Morales, 15', 3, 2, 100.00, 800.00),
(14, 2, 'Estudio', 'C/ Pintor Espinosa, 9', 1, 1, 55.00, 500.00),
(15, 2, 'Duplex', 'C/ Poeta Emilio Prados, 44', 4, 2, 125.00, 950.00),

-- JUDERÍA (zona 3) - 6 inmuebles
(16, 3, 'Casa', 'C/ Judíos, 45', 1, 1, 55.00, 750.00),
(17, 3, 'Piso', 'C/ Romero, 12', 2, 1, 60.00, 800.00),
(18, 3, 'Casa', 'C/ Tomás Conde, 8', 1, 1, 48.00, 700.00),
(19, 3, 'Piso', 'C/ Almanzor, 23', 2, 1, 65.00, 850.00),
(20, 3, 'Casa', 'C/ Deanes, 5', 3, 2, 85.00, 1000.00),
(21, 3, 'Piso', 'C/ Manríquez, 17', 2, 1, 70.00, 900.00),

-- SECTOR SUR (zona 4) - 8 inmuebles
(22, 4, 'Piso', 'C/ Escritor Conde Zamora, 23', 3, 2, 85.00, 550.00),
(23, 4, 'Piso', 'C/ Periodista Quesada Chacón, 67', 2, 1, 70.00, 500.00),
(24, 4, 'Piso', 'C/ Doctor Barraquer, 15', 3, 2, 90.00, 600.00),
(25, 4, 'Piso', 'Avda/ Confederación, 88', 4, 2, 115.00, 700.00),
(26, 4, 'Piso', 'C/ Doña Berenguela, 34', 2, 1, 75.00, 525.00),
(27, 4, 'Piso', 'C/ Astronauta Abárzuza, 12', 3, 2, 95.00, 625.00),
(28, 4, 'Piso', 'C/ Isla Lanzarote, 45', 2, 1, 68.00, 495.00),
(29, 4, 'Piso', 'C/ Poeta García Lorca, 22', 3, 1, 80.00, 575.00),

-- ARCANGEL (zona 5) - 7 inmuebles
(30, 5, 'Chalet', 'C/ Manuel Fuentes Bocanegra, 6', 4, 3, 140.00, 700.00),
(31, 5, 'Piso', 'Avda/ Arroyo del Moro, 34', 3, 2, 100.00, 650.00),
(32, 5, 'Piso', 'C/ Escritor Castilla Peón, 18', 2, 1, 75.00, 550.00),
(33, 5, 'Piso', 'C/ Caballero Andrada, 9', 3, 2, 95.00, 675.00),
(34, 5, 'Piso', 'C/ Poeta Alonso Bonilla, 56', 2, 1, 70.00, 525.00),
(35, 5, 'Duplex', 'C/ Músico Ziryab, 23', 4, 2, 120.00, 750.00),
(36, 5, 'Piso', 'C/ Pintor Palomino, 41', 3, 2, 90.00, 625.00),

-- LEVANTE (zona 6) - 6 inmuebles
(37, 6, 'Piso', 'C/ Alfaros, 57', 4, 2, 120.00, 800.00),
(38, 6, 'Piso', 'C/ Calatrava la Vieja, 12', 3, 2, 95.00, 650.00),
(39, 6, 'Piso', 'C/ Periodista Luis de Córdoba, 28', 2, 1, 72.00, 550.00),
(40, 6, 'Adosado', 'C/ Ganadero Rafael Atienza, 8', 3, 2, 100.00, 700.00),
(41, 6, 'Piso', 'C/ Manuel de Sandoval, 34', 2, 1, 68.00, 525.00),
(42, 6, 'Chalet', 'Avda/ Libia, 66', 4, 3, 135.00, 850.00),

-- PONIENTE (zona 7) - 7 inmuebles
(43, 7, 'Piso', 'C/ Encarnación, 121', 4, 2, 110.00, 750.00),
(44, 7, 'Piso', 'C/ Doña Berenguela, 45', 3, 2, 90.00, 625.00),
(45, 7, 'Piso', 'C/ Escritor Fernández Molina, 18', 2, 1, 75.00, 550.00),
(46, 7, 'Piso', 'C/ Antonio Maura, 33', 3, 2, 95.00, 675.00),
(47, 7, 'Piso', 'C/ Pintor Muñoz Barberán, 8', 2, 1, 70.00, 525.00),
(48, 7, 'Duplex', 'C/ Fuensanta, 67', 4, 2, 125.00, 800.00),
(49, 7, 'Piso', 'C/ Carmen del Río, 22', 3, 2, 88.00, 650.00),

-- FÁTIMA (zona 8) - 6 inmuebles
(50, 8, 'Piso', 'C/ Virgen de Fátima, 12', 3, 2, 90.00, 600.00),
(51, 8, 'Piso', 'C/ Periodista Francisco Varo, 34', 2, 1, 70.00, 525.00),
(52, 8, 'Piso', 'C/ José Cruz Conde, 56', 3, 2, 95.00, 650.00),
(53, 8, 'Piso', 'C/ Cardenal González, 23', 2, 1, 68.00, 500.00),
(54, 8, 'Atico', 'C/ Obispo Rojas y Contreras, 8', 4, 2, 115.00, 750.00),
(55, 8, 'Piso', 'C/ Maestro Espada, 41', 3, 2, 85.00, 625.00),

-- HUERTA DE LA REINA (zona 9) - 5 inmuebles
(56, 9, 'Piso', 'C/ Damasco, 5', 2, 1, 65.00, 575.00),
(57, 9, 'Piso', 'C/ Bagdad, 18', 3, 2, 90.00, 650.00),
(58, 9, 'Piso', 'C/ El Cairo, 33', 2, 1, 70.00, 600.00),
(59, 9, 'Adosado', 'C/ Medina Azahara, 12', 3, 2, 95.00, 700.00),
(60, 9, 'Chalet', 'C/ Teherán, 47', 4, 2, 120.00, 800.00),

-- VIÑUELA-RESCATADO (zona 10) - 6 inmuebles
(61, 10, 'Piso', 'C/ Juan XXIII, 34', 3, 2, 100.00, 650.00),
(62, 10, 'Piso', 'C/ Profesor Tierno Galván, 22', 2, 1, 75.00, 550.00),
(63, 10, 'Piso', 'C/ Manuel Azaña, 56', 3, 2, 90.00, 625.00),
(64, 10, 'Piso', 'C/ Escritor Ángel Ganivet, 8', 2, 1, 68.00, 500.00),
(65, 10, 'Duplex', 'C/ Concepción Arenal, 15', 4, 2, 115.00, 725.00),
(66, 10, 'Piso', 'C/ Clara Campoamor, 41', 3, 2, 95.00, 675.00),

-- SANTA ROSA (zona 11) - 5 inmuebles
(67, 11, 'Estudio', 'C/ Cronista Rey Díaz, 18', 1, 1, 45.00, 475.00),
(68, 11, 'Piso', 'C/ Pintor Julio Romero de Torres, 33', 2, 1, 70.00, 550.00),
(69, 11, 'Piso', 'C/ Músico Cristóbal de Morales, 67', 3, 2, 95.00, 675.00),
(70, 11, 'Piso', 'C/ Poeta Ibn Zaydun, 12', 2, 1, 68.00, 525.00),
(71, 11, 'Piso', 'C/ Escritor Valera, 28', 3, 2, 90.00, 650.00),

-- BRILLANTE (zona 12) - 7 inmuebles
(72, 12, 'Chalet', 'Avda/ del Brillante, 92', 4, 3, 150.00, 1200.00),
(73, 12, 'Piso', 'C/ Cardenal Herrero, 15', 3, 2, 110.00, 950.00),
(74, 12, 'Piso', 'C/ Ronda de Marrubial, 34', 2, 1, 80.00, 700.00),
(75, 12, 'Piso', 'C/ Doctor Marañón, 56', 3, 2, 100.00, 850.00),
(76, 12, 'Chalet', 'C/ Arquitecto Sáenz de Santamaría, 8', 4, 3, 140.00, 1100.00),
(77, 12, 'Piso', 'C/ Escritor Arturo Reyes, 23', 2, 1, 75.00, 675.00),
(78, 12, 'Atico', 'Avda/ Medina Azahara, 78', 3, 2, 105.00, 900.00),

-- CERRO MURIANO (zona 13) - 6 inmuebles
(79, 13, 'Casa', 'C/ Real, 45', 3, 2, 95.00, 550.00),
(80, 13, 'Casa', 'C/ Córdoba, 12', 2, 1, 70.00, 450.00),
(81, 13, 'Chalet', 'C/ Santa Bárbara, 33', 4, 2, 120.00, 650.00),
(82, 13, 'Casa', 'C/ Mineros, 8', 3, 2, 90.00, 525.00),
(83, 13, 'Casa', 'C/ Plaza de España, 18', 2, 1, 68.00, 475.00),
(84, 13, 'Casa', 'C/ Iglesia, 56', 3, 1, 85.00, 575.00),

-- ARRUZAFILLA (zona 14) - 6 inmuebles
(85, 14, 'Piso', 'C/ Periodista Rafael Castejón, 23', 3, 2, 95.00, 700.00),
(86, 14, 'Chalet', 'Avda/ de la Arruzafilla, 67', 4, 2, 125.00, 850.00),
(87, 14, 'Piso', 'C/ Jardinero Juan de Dios, 12', 2, 1, 72.00, 625.00),
(88, 14, 'Adosado', 'C/ Conquistador Benito Arias Montano, 34', 3, 2, 100.00, 750.00),
(89, 14, 'Piso', 'C/ Doctor Blanco Soler, 8', 2, 1, 68.00, 600.00),
(90, 14, 'Piso', 'C/ San Rafael de la Albaida, 45', 3, 2, 90.00, 700.00),

-- GUADALQUIVIR (zona 15) - 7 inmuebles
(91, 15, 'Piso', 'Paseo de la Ribera, 15', 3, 2, 100.00, 800.00),
(92, 15, 'Piso', 'C/ Ronda de Isasa, 45', 2, 1, 75.00, 650.00),
(93, 15, 'Atico', 'C/ Doctor Eduardo García Triviño, 22', 4, 3, 130.00, 950.00),
(94, 15, 'Piso', 'C/ San Francisco de Sales, 8', 2, 1, 70.00, 600.00),
(95, 15, 'Piso', 'Avda/ Campo Madre de Dios, 56', 3, 2, 95.00, 750.00),
(96, 15, 'Piso', 'C/ Puente Genil, 33', 3, 2, 90.00, 700.00),
(97, 15, 'Duplex', 'C/ Compositor Joaquín Rodrigo, 12', 4, 2, 120.00, 850.00);00),
(87, 14, 'C/ Jardinero Juan de Dios, 12', 2, 1, 72.00, 625.00),
(88, 14, 'C/ Conquistador Benito Arias Montano, 34', 3, 2, 100.00, 750.00),
(89, 14, 'C/ Doctor Blanco Soler, 8', 2, 1, 68.00, 600.00),
(90, 14, 'C/ San Rafael de la Albaida, 45', 3, 2, 90.00, 700.00),

-- GUADALQUIVIR (zona 15) - 7 inmuebles
(91, 15, 'Paseo de la Ribera, 15', 3, 2, 100.00, 800.00),
(92, 15, 'C/ Ronda de Isasa, 45', 2, 1, 75.00, 650.00),
(93, 15, 'C/ Doctor Eduardo García Triviño, 22', 4, 3, 130.00, 950.00),
(94, 15, 'C/ San Francisco de Sales, 8', 2, 1, 70.00, 600.00),
(95, 15, 'Avda/ Campo Madre de Dios, 56', 3, 2, 95.00, 750.00),
(96, 15, 'C/ Puente Genil, 33', 3, 2, 90.00, 700.00),
(97, 15, 'C/ Compositor Joaquín Rodrigo, 12', 4, 2, 120.00, 850.00);

