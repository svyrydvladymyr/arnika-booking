-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 09, 2019 at 11:35 PM
-- Server version: 5.6.37
-- PHP Version: 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kalcifer`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookinggurt2`
--

CREATE TABLE `bookinggurt2` (
  `id` int(6) UNSIGNED NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `telephone` bigint(20) DEFAULT NULL,
  `nomer_kimn` int(11) DEFAULT NULL,
  `data_zaizdu` date DEFAULT NULL,
  `kilk_dniv` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `status` varchar(30) DEFAULT NULL,
  `tip` varchar(30) DEFAULT NULL,
  `coment` text,
  `admin` varchar(30) DEFAULT NULL,
  `data_zapisu` date DEFAULT NULL,
  `admin_updata` varchar(30) DEFAULT NULL,
  `data_zmin` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `bookinggurt2`
--

INSERT INTO `bookinggurt2` (`id`, `first_name`, `last_name`, `telephone`, `nomer_kimn`, `data_zaizdu`, `kilk_dniv`, `price`, `status`, `tip`, `coment`, `admin`, `data_zapisu`, `admin_updata`, `data_zmin`) VALUES
(52, 'Iван', 'Геник', 0, 1, '2019-03-09', 1, 200, 'pay', 'worker', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(53, 'Iван', 'Геник', 0, 2, '2019-03-09', 2, 130, 'pay', 'worker', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(54, 'Iван', 'Геник', 0, 2, '2019-03-08', 2, 130, 'pay', 'worker', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(55, 'Iван', 'Геник', 0, 3, '2019-03-08', 2, 150, 'pay', 'worker', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(56, 'Iван', 'Геник', 0, 3, '2019-03-09', 2, 150, 'pay', 'worker', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(57, 'Iван', 'Геник', 0, 4, '2019-03-08', 2, 150, 'pay', 'worker', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(58, 'Iван', 'Геник', 0, 4, '2019-03-09', 2, 150, 'pay', 'worker', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(59, 'Iван', 'Геник', 0, 5, '2019-03-08', 2, 160, 'pay', 'worker', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(60, 'Iван', 'Геник', 0, 5, '2019-03-09', 2, 160, 'pay', 'worker', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(61, 'Iван', 'Геник', 0, 6, '2019-03-08', 2, 180, 'pay', 'worker', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(62, 'Iван', 'Геник', 0, 6, '2019-03-09', 2, 180, 'pay', 'worker', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(63, 'Iгор', 'Козак', 0, 6, '2019-03-29', 2, 180, 'pay', 'worker', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(64, 'Iгор', 'Козак', 0, 6, '2019-03-28', 2, 180, 'pay', 'worker', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(66, 'Iван', 'Геник', 0, 7, '2019-03-09', 2, 200, 'pay', 'worker', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(67, 'Iван', 'Геник', 0, 8, '2019-03-09', 1, 130, 'pay', 'worker', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(68, 'Iван', 'Геник', 0, 9, '2019-03-09', 1, 130, 'pay', 'worker', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(69, 'Iван', 'Геник', 0, 10, '2019-03-09', 1, 130, 'pay', 'worker', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(70, 'Iван', 'Геник', 0, 11, '2019-03-09', 1, 130, 'pay', 'worker', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(71, 'Iван', 'Геник', 0, 12, '2019-03-09', 1, 150, 'pay', 'worker', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(72, 'Iван', 'Геник', 0, 14, '2019-03-09', 1, 90, 'pay', 'worker', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(73, 'Iван', 'Геник', 0, 15, '2019-03-09', 1, 90, 'pay', 'worker', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookinggurt2`
--
ALTER TABLE `bookinggurt2`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookinggurt2`
--
ALTER TABLE `bookinggurt2`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
