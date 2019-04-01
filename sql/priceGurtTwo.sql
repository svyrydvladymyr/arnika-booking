-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 01, 2019 at 01:25 PM
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
-- Table structure for table `priceGurtOne`
--

CREATE TABLE `priceGurtOne` (
  `id` int(6) UNSIGNED NOT NULL,
  `room` int(6) DEFAULT NULL,
  `price` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `priceGurtOne`
--

INSERT INTO `priceGurtOne` (`id`, `room`, `price`) VALUES
(1, 1, '420грн 4 місця'),
(2, 2, '450грн 3+2 місця'),
(3, 3, '420грн 3 місця'),
(4, 4, '450грн 3+2 місця'),
(5, 5, '420грн 4 місця'),
(6, 6, '450грн 3+2 місця'),
(7, 7, '420грн 4 місця'),
(8, 8, '450грн 3+2 місця'),
(9, 9, '420грн 5 місць'),
(10, 10, '450грн 3+2місця'),
(11, 11, '420грн 3 місця'),
(12, 12, '450грн 3+2місця');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `priceGurtOne`
--
ALTER TABLE `priceGurtOne`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `priceGurtOne`
--
ALTER TABLE `priceGurtOne`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
