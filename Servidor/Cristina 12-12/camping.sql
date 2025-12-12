-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 03-02-2021 a las 08:25:13
-- Versión del servidor: 8.0.21-0ubuntu0.20.04.4
-- Versión de PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `camping`
--
CREATE DATABASE IF NOT EXISTS `camping` DEFAULT CHARACTER SET utf8mb4;
USE `camping`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `electricity`
--

CREATE TABLE `electricity` (
  `ampere` varchar(6) NOT NULL,
  `price` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `electricity`
--

INSERT INTO `electricity` (`ampere`, `price`) VALUES
('10', 4.2),
('15', 4.9),
('20', 5.5),
('8', 3.9),
('none', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pitches`
--

CREATE TABLE `pitches` (
  `number` int NOT NULL,
  `type` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `pitches`
--

INSERT INTO `pitches` (`number`, `type`) VALUES
(100, 1),
(101, 1),
(102, 1),
(103, 1),
(104, 1),
(105, 1),
(106, 1),
(107, 1),
(108, 1),
(109, 1),
(110, 1),
(111, 1),
(200, 2),
(201, 2),
(202, 2),
(203, 2),
(204, 2),
(205, 2),
(206, 2),
(300, 3),
(301, 3),
(302, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rates`
--

CREATE TABLE `rates` (
  `type` int NOT NULL,
  `untilnights` int NOT NULL,
  `price` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `rates`
--

INSERT INTO `rates` (`type`, `untilnights`, `price`) VALUES
(1, 7, 20),
(1, 14, 18),
(1, 100, 15),
(2, 7, 25),
(2, 14, 22),
(2, 100, 20),
(3, 7, 30),
(3, 14, 27),
(3, 100, 25);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservations`
--

CREATE TABLE `reservations` (
  `name` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `arrivalDate` date NOT NULL,
  `departureDate` date NOT NULL,
  `pitchNumber` int NOT NULL,
  `electricity` varchar(6) NOT NULL,
  `id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `reservations`
--

INSERT INTO `reservations` (`name`, `surname`, `arrivalDate`, `departureDate`, `pitchNumber`, `electricity`, `id`) VALUES
('Antonio Jesús', 'Calvo Morales', '2021-02-02', '2021-02-08', 100, '10', 1),
('Luis Eduardo', 'Ramos Chofle', '2021-02-01', '2021-02-05', 300, '10', 3),
('Sofía', 'Rodríguez García', '2021-01-24', '2021-02-28', 101, '8', 4),
('Para el examen', 'Lindo ejercicio', '2017-02-24', '2017-02-28', 108, '8', 13),
('Salvador', 'Pérez Jorge', '2017-02-24', '2017-02-28', 103, '15', 14),
('Calvo Morales', 'Antonio Jesús', '2021-02-01', '2021-02-07', 108, '20', 18),
('PHP 2021', 'Prueba', '2021-02-01', '2021-02-07', 107, '20', 19);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `types`
--

CREATE TABLE `types` (
  `id` int NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `types`
--

INSERT INTO `types` (`id`, `name`) VALUES
(1, 'Standard'),
(2, 'Superior'),
(3, 'Confort');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`username`, `password`) VALUES
('antonio', 'trassierra'),
('alumno', 'alumno');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `electricity`
--
ALTER TABLE `electricity`
  ADD PRIMARY KEY (`ampere`);

--
-- Indices de la tabla `pitches`
--
ALTER TABLE `pitches`
  ADD PRIMARY KEY (`number`);

--
-- Indices de la tabla `rates`
--
ALTER TABLE `rates`
  ADD PRIMARY KEY (`type`,`untilnights`);

--
-- Indices de la tabla `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `types`
--
ALTER TABLE `types`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `reservations`
--
ALTER TABLE `reservations`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `types`
--
ALTER TABLE `types`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `rates`
--
ALTER TABLE `rates`
  ADD CONSTRAINT `rates_ibfk_1` FOREIGN KEY (`type`) REFERENCES `types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
