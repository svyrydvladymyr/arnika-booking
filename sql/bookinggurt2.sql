-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 09, 2019 at 12:31 PM
-- Server version: 5.7.20
-- PHP Version: 7.2.0

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
(1, 'Hgjkjhk', 'Jkhjk', 786786786, 2, '2019-04-04', 7, 260, 'pay', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-01', 'Svyryd Volodymyr', '2019-04-09'),
(2, 'Hgjkjhk', 'Jkhjk', 786786786, 2, '2019-04-05', 7, 260, 'pay', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-01', 'Svyryd Volodymyr', '2019-04-09'),
(3, 'Hgjkjhk', 'Jkhjk', 786786786, 2, '2019-04-06', 7, 260, 'pay', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-01', 'Svyryd Volodymyr', '2019-04-09'),
(4, 'Hgjkjhk', 'Jkhjk', 786786786, 2, '2019-04-07', 7, 260, 'pay', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-01', 'Svyryd Volodymyr', '2019-04-09'),
(5, 'Hgjkjhk', 'Jkhjk', 786786786, 2, '2019-04-03', 7, 260, 'pay', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-01', 'Svyryd Volodymyr', '2019-04-09'),
(6, 'Hgjkjhk', 'Jkhjk', 786786786, 2, '2019-04-02', 7, 260, 'pay', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-01', 'Svyryd Volodymyr', '2019-04-09'),
(7, 'Hgjkjhk', 'Jkhjk', 786786786, 2, '2019-04-08', 7, 260, 'pay', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-01', 'Svyryd Volodymyr', '2019-04-09'),
(8, 'Oooo', 'Oooo', 777777777, 9, '2019-04-10', 9, 260, 'rezerv', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-01', NULL, NULL),
(9, 'Oooo', 'Oooo', 777777777, 9, '2019-04-13', 9, 260, 'rezerv', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-01', NULL, NULL),
(10, 'Oooo', 'Oooo', 777777777, 9, '2019-04-12', 9, 260, 'rezerv', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-01', NULL, NULL),
(11, 'Oooo', 'Oooo', 777777777, 9, '2019-04-14', 9, 260, 'rezerv', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-01', NULL, NULL),
(12, 'Oooo', 'Oooo', 777777777, 9, '2019-04-16', 9, 260, 'rezerv', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-01', NULL, NULL),
(13, 'Oooo', 'Oooo', 777777777, 9, '2019-04-18', 9, 260, 'rezerv', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-01', NULL, NULL),
(14, 'Oooo', 'Oooo', 777777777, 9, '2019-04-15', 9, 260, 'rezerv', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-01', NULL, NULL),
(15, 'Oooo', 'Oooo', 777777777, 9, '2019-04-11', 9, 260, 'rezerv', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-01', NULL, NULL),
(16, 'Oooo', 'Oooo', 777777777, 9, '2019-04-17', 9, 260, 'rezerv', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-01', NULL, NULL),
(17, 'Pp', 'Pp', 777777777, 9, '2019-04-02', 4, 130, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-01', 'Svyryd Volodymyr', '2019-04-09'),
(18, 'Pp', 'Pp', 777777777, 9, '2019-04-03', 4, 130, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-01', 'Svyryd Volodymyr', '2019-04-09'),
(19, 'Pp', 'Pp', 777777777, 9, '2019-04-04', 4, 130, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-01', 'Svyryd Volodymyr', '2019-04-09'),
(20, 'Pp', 'Pp', 777777777, 9, '2019-04-05', 4, 130, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-01', 'Svyryd Volodymyr', '2019-04-09'),
(21, 'Hjkhjk', 'Hjkhjk', 575756756, 8, '2019-04-26', 8, 130, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-04', 'Svyryd Volodymyr', '2019-04-09'),
(22, 'Hjkhjk', 'Hjkhjk', 575756756, 8, '2019-04-28', 8, 130, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-04', 'Svyryd Volodymyr', '2019-04-09'),
(23, 'Hjkhjk', 'Hjkhjk', 575756756, 8, '2019-04-27', 8, 130, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-04', 'Svyryd Volodymyr', '2019-04-09'),
(24, 'Hjkhjk', 'Hjkhjk', 575756756, 8, '2019-04-25', 8, 130, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-04', 'Svyryd Volodymyr', '2019-04-09'),
(25, 'Hjkhjk', 'Hjkhjk', 575756756, 8, '2019-04-24', 8, 130, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-04', 'Svyryd Volodymyr', '2019-04-09'),
(26, 'Hjkhjk', 'Hjkhjk', 575756756, 8, '2019-04-30', 8, 130, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-04', 'Svyryd Volodymyr', '2019-04-09'),
(27, 'Hjkhjk', 'Hjkhjk', 575756756, 8, '2019-04-29', 8, 130, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-04', 'Svyryd Volodymyr', '2019-04-09'),
(28, 'Hjkhjk', 'Hjkhjk', 575756756, 8, '2019-05-01', 8, 130, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-04', 'Svyryd Volodymyr', '2019-04-09');

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
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
