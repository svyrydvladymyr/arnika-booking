-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 09, 2019 at 12:37 PM
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
-- Table structure for table `bookinggurt1`
--

CREATE TABLE `bookinggurt1` (
  `id` int(6) UNSIGNED NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `telephone` varchar(20) DEFAULT NULL,
  `nomer_kimn` int(11) DEFAULT NULL,
  `data_zaizdu` date DEFAULT NULL,
  `kilk_dniv` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `status` varchar(30) DEFAULT NULL,
  `tip` varchar(30) DEFAULT NULL,
  `coment` text,
  `admin` varchar(30) DEFAULT NULL,
  `data_zapisu` date DEFAULT NULL,
  `admin_updata` varchar(30) DEFAULT '-',
  `data_zmin` blob
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `bookinggurt1`
--

INSERT INTO `bookinggurt1` (`id`, `first_name`, `last_name`, `telephone`, `nomer_kimn`, `data_zaizdu`, `kilk_dniv`, `price`, `status`, `tip`, `coment`, `admin`, `data_zapisu`, `admin_updata`, `data_zmin`) VALUES
(1, 'Yrtutyu', 'Tyutyu', '675675656', 4, '2019-04-01', 7, 225, 'del', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-01', 'Svyryd Volodymyr', 0x323031392d30342d3038),
(2, 'Yrtutyu', 'Tyutyu', '675675656', 4, '2019-04-04', 7, 225, 'del', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-01', 'Svyryd Volodymyr', 0x323031392d30342d3038),
(3, 'Yrtutyu', 'Tyutyu', '675675656', 4, '2019-04-05', 7, 225, 'del', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-01', 'Svyryd Volodymyr', 0x323031392d30342d3038),
(4, 'Yrtutyu', 'Tyutyu', '675675656', 4, '2019-04-02', 7, 225, 'del', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-01', 'Svyryd Volodymyr', 0x323031392d30342d3038),
(5, 'Yrtutyu', 'Tyutyu', '675675656', 4, '2019-04-07', 7, 225, 'del', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-01', 'Svyryd Volodymyr', 0x323031392d30342d3038),
(6, 'Yrtutyu', 'Tyutyu', '675675656', 4, '2019-04-06', 7, 225, 'del', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-01', 'Svyryd Volodymyr', 0x323031392d30342d3038),
(7, 'Yrtutyu', 'Tyutyu', '675675656', 4, '2019-04-03', 7, 225, 'del', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-01', 'Svyryd Volodymyr', 0x323031392d30342d3038),
(8, 'Hhhh', 'Hhhh', '566565656', 6, '2019-04-03', 6, 225, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-01', 'Svyryd Volodymyr', 0x323031392d30342d3038),
(9, 'Hhhh', 'Hhhh', '566565656', 6, '2019-04-05', 6, 225, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-01', 'Svyryd Volodymyr', 0x323031392d30342d3038),
(10, 'Hhhh', 'Hhhh', '566565656', 6, '2019-04-06', 6, 225, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-01', 'Svyryd Volodymyr', 0x323031392d30342d3038),
(11, 'Hhhh', 'Hhhh', '566565656', 6, '2019-04-08', 6, 225, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-01', 'Svyryd Volodymyr', 0x323031392d30342d3038),
(12, 'Hhhh', 'Hhhh', '566565656', 6, '2019-04-07', 6, 225, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-01', 'Svyryd Volodymyr', 0x323031392d30342d3038),
(13, 'Hhhh', 'Hhhh', '566565656', 6, '2019-04-04', 6, 225, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-01', 'Svyryd Volodymyr', 0x323031392d30342d3038),
(14, 'Jkhkjh', 'Khjkhjk', '867867867', 7, '2019-04-02', 6, 400, 'pay', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-03', 'Svyryd Volodymyr', 0x323031392d30342d3039),
(15, 'Jkhkjh', 'Khjkhjk', '867867867', 7, '2019-04-07', 6, 400, 'pay', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-03', 'Svyryd Volodymyr', 0x323031392d30342d3039),
(16, 'Jkhkjh', 'Khjkhjk', '867867867', 7, '2019-04-06', 6, 400, 'pay', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-03', 'Svyryd Volodymyr', 0x323031392d30342d3039),
(17, 'Jkhkjh', 'Khjkhjk', '867867867', 7, '2019-04-03', 6, 400, 'pay', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-03', 'Svyryd Volodymyr', 0x323031392d30342d3039),
(18, 'Jkhkjh', 'Khjkhjk', '867867867', 7, '2019-04-05', 6, 400, 'pay', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-03', 'Svyryd Volodymyr', 0x323031392d30342d3039),
(19, 'Jkhkjh', 'Khjkhjk', '867867867', 7, '2019-04-04', 6, 400, 'pay', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-03', 'Svyryd Volodymyr', 0x323031392d30342d3039),
(20, 'Hgjhjg', 'Htyutyu', '657567567', 7, '2019-05-07', 7, 400, 'rezerv', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-03', NULL, NULL),
(21, 'Hgjhjg', 'Htyutyu', '657567567', 7, '2019-05-11', 7, 400, 'rezerv', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-03', NULL, NULL),
(22, 'Hgjhjg', 'Htyutyu', '657567567', 7, '2019-05-10', 7, 400, 'rezerv', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-03', NULL, NULL),
(23, 'Hgjhjg', 'Htyutyu', '657567567', 7, '2019-05-12', 7, 400, 'rezerv', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-03', NULL, NULL),
(24, 'Hgjhjg', 'Htyutyu', '657567567', 7, '2019-05-13', 7, 400, 'rezerv', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-03', NULL, NULL),
(25, 'Hgjhjg', 'Htyutyu', '657567567', 7, '2019-05-08', 7, 400, 'rezerv', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-03', NULL, NULL),
(26, 'Hgjhjg', 'Htyutyu', '657567567', 7, '2019-05-09', 7, 400, 'rezerv', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-03', NULL, NULL),
(27, 'Tutyut', 'Tyutyu', '675675675', 9, '2019-06-04', 4, 260, 'rezerv', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-03', NULL, NULL),
(28, 'Tutyut', 'Tyutyu', '675675675', 9, '2019-06-06', 4, 260, 'rezerv', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-03', NULL, NULL),
(29, 'Tutyut', 'Tyutyu', '675675675', 9, '2019-06-07', 4, 260, 'rezerv', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-03', NULL, NULL),
(30, 'Tutyut', 'Tyutyu', '675675675', 9, '2019-06-05', 4, 260, 'rezerv', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-03', NULL, NULL),
(31, 'Fghfgh', 'Rtyrty', '456456546', 2, '2019-04-04', 5, 260, 'rezerv', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-03', 'Svyryd Volodymyr', 0x323031392d30342d3038),
(32, 'Fghfgh', 'Rtyrty', '456456546', 2, '2019-04-07', 5, 260, 'rezerv', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-03', 'Svyryd Volodymyr', 0x323031392d30342d3038),
(33, 'Fghfgh', 'Rtyrty', '456456546', 2, '2019-04-08', 5, 260, 'rezerv', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-03', 'Svyryd Volodymyr', 0x323031392d30342d3038),
(34, 'Fghfgh', 'Rtyrty', '456456546', 2, '2019-04-06', 5, 260, 'rezerv', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-03', 'Svyryd Volodymyr', 0x323031392d30342d3038),
(35, 'Fghfgh', 'Rtyrty', '456456546', 2, '2019-04-05', 5, 260, 'rezerv', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-03', 'Svyryd Volodymyr', 0x323031392d30342d3038),
(36, 'Пропро', 'Опропро', '547567567', 6, '2019-04-10', 4, 360, 'rezerv', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-03', NULL, NULL),
(37, 'Пропро', 'Опропро', '547567567', 6, '2019-04-11', 4, 360, 'rezerv', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-03', NULL, NULL),
(38, 'Пропро', 'Опропро', '547567567', 6, '2019-04-13', 4, 360, 'rezerv', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-03', NULL, NULL),
(39, 'Пропро', 'Опропро', '547567567', 6, '2019-04-12', 4, 360, 'rezerv', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-03', NULL, NULL),
(40, 'Ghjghj', 'Tytuyty', '565454564', 8, '2019-04-04', 9, 225, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-04', 'Svyryd Volodymyr', 0x323031392d30342d3039),
(41, 'Ghjghj', 'Tytuyty', '565454564', 8, '2019-04-07', 9, 225, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-04', 'Svyryd Volodymyr', 0x323031392d30342d3039),
(42, 'Ghjghj', 'Tytuyty', '565454564', 8, '2019-04-08', 9, 225, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-04', 'Svyryd Volodymyr', 0x323031392d30342d3039),
(43, 'Ghjghj', 'Tytuyty', '565454564', 8, '2019-04-03', 9, 225, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-04', 'Svyryd Volodymyr', 0x323031392d30342d3039),
(44, 'Ghjghj', 'Tytuyty', '565454564', 8, '2019-04-05', 9, 225, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-04', 'Svyryd Volodymyr', 0x323031392d30342d3039),
(45, 'Ghjghj', 'Tytuyty', '565454564', 8, '2019-04-06', 9, 225, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-04', 'Svyryd Volodymyr', 0x323031392d30342d3039),
(46, 'Ghjghj', 'Tytuyty', '565454564', 8, '2019-04-09', 9, 225, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-04', 'Svyryd Volodymyr', 0x323031392d30342d3039),
(47, 'Ghjghj', 'Tytuyty', '565454564', 8, '2019-04-10', 9, 225, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-04', 'Svyryd Volodymyr', 0x323031392d30342d3039),
(48, 'Ghjghj', 'Tytuyty', '565454564', 8, '2019-04-11', 9, 225, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-04', 'Svyryd Volodymyr', 0x323031392d30342d3039),
(49, 'Fgjghj', 'Ghjghj', '675675675', 6, '2019-05-02', 7, 225, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-04', NULL, NULL),
(50, 'Fgjghj', 'Ghjghj', '675675675', 6, '2019-04-29', 7, 225, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-04', NULL, NULL),
(51, 'Fgjghj', 'Ghjghj', '675675675', 6, '2019-05-04', 7, 225, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-04', NULL, NULL),
(52, 'Fgjghj', 'Ghjghj', '675675675', 6, '2019-05-03', 7, 225, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-04', NULL, NULL),
(53, 'Fgjghj', 'Ghjghj', '675675675', 6, '2019-04-30', 7, 225, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-04', NULL, NULL),
(54, 'Fgjghj', 'Ghjghj', '675675675', 6, '2019-05-05', 7, 225, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-04', NULL, NULL),
(55, 'Fgjghj', 'Ghjghj', '675675675', 6, '2019-05-01', 7, 225, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-04', NULL, NULL),
(56, 'Ghjghj', 'Ghjghj', '567567567', 5, '2019-04-06', 8, 420, 'pay', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-04', NULL, NULL),
(57, 'Ghjghj', 'Ghjghj', '567567567', 5, '2019-04-07', 8, 420, 'pay', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-04', NULL, NULL),
(58, 'Ghjghj', 'Ghjghj', '567567567', 5, '2019-04-05', 8, 420, 'pay', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-04', NULL, NULL),
(59, 'Ghjghj', 'Ghjghj', '567567567', 5, '2019-04-03', 8, 420, 'pay', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-04', NULL, NULL),
(60, 'Ghjghj', 'Ghjghj', '567567567', 5, '2019-04-04', 8, 420, 'pay', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-04', NULL, NULL),
(61, 'Ghjghj', 'Ghjghj', '567567567', 5, '2019-04-08', 8, 420, 'pay', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-04', NULL, NULL),
(62, 'Ghjghj', 'Ghjghj', '567567567', 5, '2019-04-09', 8, 420, 'pay', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-04', NULL, NULL),
(63, 'Ghjghj', 'Ghjghj', '567567567', 5, '2019-04-10', 8, 420, 'pay', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-04', NULL, NULL),
(64, 'Володимир', 'Свирид', '444444444', 9, '2019-04-05', 8, 210, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-05', 'Svyryd Volodymyr', 0x323031392d30342d3039),
(65, 'Володимир', 'Свирид', '444444444', 9, '2019-04-06', 8, 210, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-05', 'Svyryd Volodymyr', 0x323031392d30342d3039),
(66, 'Володимир', 'Свирид', '444444444', 9, '2019-04-04', 8, 210, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-05', 'Svyryd Volodymyr', 0x323031392d30342d3039),
(67, 'Володимир', 'Свирид', '444444444', 9, '2019-04-02', 8, 210, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-05', 'Svyryd Volodymyr', 0x323031392d30342d3039),
(68, 'Володимир', 'Свирид', '444444444', 9, '2019-04-07', 8, 210, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-05', 'Svyryd Volodymyr', 0x323031392d30342d3039),
(69, 'Володимир', 'Свирид', '444444444', 9, '2019-04-03', 8, 210, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-05', 'Svyryd Volodymyr', 0x323031392d30342d3039),
(70, 'Володимир', 'Свирид', '444444444', 9, '2019-04-08', 8, 210, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-05', 'Svyryd Volodymyr', 0x323031392d30342d3039),
(71, 'Володимир', 'Свирид', '444444444', 9, '2019-04-09', 8, 210, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-05', 'Svyryd Volodymyr', 0x323031392d30342d3039),
(72, 'Fghfgh', 'Fghfgh', '656565656', 1, '2019-04-30', 4, 420, 'pay', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-05', NULL, NULL),
(73, 'Fghfgh', 'Fghfgh', '656565656', 1, '2019-05-03', 4, 420, 'pay', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-05', NULL, NULL),
(74, 'Fghfgh', 'Fghfgh', '656565656', 1, '2019-05-01', 4, 420, 'pay', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-05', NULL, NULL),
(75, 'Fghfgh', 'Fghfgh', '656565656', 1, '2019-05-02', 4, 420, 'pay', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-05', NULL, NULL),
(76, 'Tyutyu', 'Tyutyu', '567567567', 2, '2019-04-29', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-05', NULL, NULL),
(77, 'Tyutyu', 'Tyutyu', '567567567', 2, '2019-04-30', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodymyr', '2019-04-05', NULL, NULL),
(78, 'Еееее', 'Еееее', '777777777', 1, '2019-04-17', 5, 210, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-05', '-', 0x2d),
(79, 'Еееее', 'Еееее', '777777777', 1, '2019-04-19', 5, 210, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-05', '-', 0x2d),
(80, 'Еееее', 'Еееее', '777777777', 1, '2019-04-21', 5, 210, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-05', '-', 0x2d),
(81, 'Еееее', 'Еееее', '777777777', 1, '2019-04-20', 5, 210, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-05', '-', 0x2d),
(82, 'Еееее', 'Еееее', '777777777', 1, '2019-04-18', 5, 210, 'pay', 'worker', NULL, 'Svyryd Volodymyr', '2019-04-05', '-', 0x2d);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookinggurt1`
--
ALTER TABLE `bookinggurt1`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookinggurt1`
--
ALTER TABLE `bookinggurt1`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
