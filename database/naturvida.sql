-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 05-06-2024 a las 00:31:42
-- Versión del servidor: 8.0.30
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `naturvida`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `dDocumento` int NOT NULL,
  `dNombre` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `dDireccion` varchar(50) NOT NULL,
  `dTelefono` int NOT NULL,
  `dCorreo` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`dDocumento`, `dNombre`, `dDireccion`, `dTelefono`, `dCorreo`) VALUES
(1, 'luis carlos', 'calle 13 26 ', 31060893, 'carlos@gmail.com'),
(2, 'victor manuel', 'cristales ', 31087819, 'victo@gmail.com'),
(4, 'luis ', 'calle 13 18-26 ', 31087819, 'luis@gmail.com'),
(5, 'luis ', 'calle 13 18-26 ', 31087819, 'luis@gmail.com'),
(6, 'luis ', 'calle 13 18-26 ', 31087819, 'luis@gmail.com'),
(7, 'luis ', 'calle 13 18-26 ', 31087819, 'luis@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `facturadetalle`
--

CREATE TABLE `facturadetalle` (
  `facNumero` int NOT NULL,
  `facProducto` int NOT NULL,
  `facCantidad` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `facturadetalle`
--

INSERT INTO `facturadetalle` (`facNumero`, `facProducto`, `facCantidad`) VALUES
(1, 1, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `facturas`
--

CREATE TABLE `facturas` (
  `facNumero` int NOT NULL,
  `facFecha` date NOT NULL,
  `facCliente` int NOT NULL,
  `facValorTotal` int NOT NULL,
  `facVendedor` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `facturas`
--

INSERT INTO `facturas` (`facNumero`, `facFecha`, `facCliente`, `facValorTotal`, `facVendedor`) VALUES
(1, '2023-05-27', 2, 44000, 2),
(3, '2024-05-27', 4, 44000, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `proCodigo` int NOT NULL,
  `proDescripcion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `proValor` int NOT NULL,
  `proCantidad` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`proCodigo`, `proDescripcion`, `proValor`, `proCantidad`) VALUES
(1, 'phone 15', 1500000, 10),
(5, 'phone 16', 150000, 10),
(6, 'phone 16', 150000, 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `username`, `password`) VALUES
(1, 'admin', 'vic123'),
(2, 'victor', 'hola'),
(3, 'victor2', '$2a$10$4T4ioASQ/8/RpuCpe2uXROUs4M.OaSPlgd/hmwqtHkE9t9UwigOum');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vendedores`
--

CREATE TABLE `vendedores` (
  `venUsuario` int NOT NULL,
  `venContraseña` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `vendedores`
--

INSERT INTO `vendedores` (`venUsuario`, `venContraseña`) VALUES
(1, 'password1'),
(2, 'password2'),
(3, 'password3');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`dDocumento`);

--
-- Indices de la tabla `facturadetalle`
--
ALTER TABLE `facturadetalle`
  ADD KEY `fk_facturadetalle_facturas` (`facNumero`),
  ADD KEY `fk_facturadetalle_productos` (`facProducto`);

--
-- Indices de la tabla `facturas`
--
ALTER TABLE `facturas`
  ADD PRIMARY KEY (`facNumero`),
  ADD KEY `fk_facturas_clientes` (`facCliente`),
  ADD KEY `fk_facturas_usuarios` (`facVendedor`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`proCodigo`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `vendedores`
--
ALTER TABLE `vendedores`
  ADD PRIMARY KEY (`venUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `dDocumento` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `facturas`
--
ALTER TABLE `facturas`
  MODIFY `facNumero` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `proCodigo` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `vendedores`
--
ALTER TABLE `vendedores`
  MODIFY `venUsuario` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `facturadetalle`
--
ALTER TABLE `facturadetalle`
  ADD CONSTRAINT `fk_facturadetalle_facturas` FOREIGN KEY (`facNumero`) REFERENCES `facturas` (`facNumero`),
  ADD CONSTRAINT `fk_facturadetalle_productos` FOREIGN KEY (`facProducto`) REFERENCES `productos` (`proCodigo`);

--
-- Filtros para la tabla `facturas`
--
ALTER TABLE `facturas`
  ADD CONSTRAINT `fk_facturas_clientes` FOREIGN KEY (`facCliente`) REFERENCES `clientes` (`dDocumento`),
  ADD CONSTRAINT `fk_facturas_usuarios` FOREIGN KEY (`facVendedor`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `fk_facturas_vendedores` FOREIGN KEY (`facVendedor`) REFERENCES `vendedores` (`venUsuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
