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
-- Table structure for table `priceGurtThree`
--

CREATE TABLE `priceGurtThree` (
  `id` int(6) UNSIGNED NOT NULL,
  `room` int(6) DEFAULT NULL,
  `price` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `priceGurtThree`
--

INSERT INTO `priceGurtThree` (`id`, `room`, `price`) VALUES
(1, 1, '400грн 2 місця'),
(2, 2, '260грн 2 місця'),
(3, 3, '300грн 3 місця'),
(4, 4, '300грн 3 місця'),
(5, 5, '320грн 4 місця'),
(6, 6, '360грн 2 місця'),
(7, 7, '400грн 2 місця'),
(8, 8, '260грн 2 місця'),
(9, 9, '260грн 2 місць'),
(10, 10, '260грн 2 місця'),
(11, 11, '260грн 2 місця'),
(12, 12, '300грн 2 місця'),
(13, 13, 'Кімната відсутня'),
(14, 14, '180грн 2 місця'),
(15, 15, '180грн 2 місця');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `priceGurtThree`
--
ALTER TABLE `priceGurtThree`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `priceGurtThree`
--
ALTER TABLE `priceGurtThree`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
