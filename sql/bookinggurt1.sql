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
-- Table structure for table `bookinggurt1`
--

CREATE TABLE `bookinggurt1` (
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
-- Dumping data for table `bookinggurt1`
--

INSERT INTO `bookinggurt1` (`id`, `first_name`, `last_name`, `telephone`, `nomer_kimn`, `data_zaizdu`, `kilk_dniv`, `price`, `status`, `tip`, `coment`, `admin`, `data_zapisu`, `admin_updata`, `data_zmin`) VALUES
(208, 'Лля', 'Шеремета', 506755611, 1, '2019-02-15', 2, 210, 'pay', 'worker', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(209, 'Лля', 'Шеремета', 506755611, 1, '2019-02-16', 2, 210, 'pay', 'worker', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(210, 'Наталя', 'Овчаренко', 0, 1, '2019-02-27', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(211, 'Наталя', 'Овчаренко', 0, 1, '2019-02-28', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(212, 'Тарас', 'Спендор', 0, 1, '2019-02-09', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(213, 'Тарас', 'Спендор', 0, 1, '2019-02-10', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(214, 'Тарас', 'Спендор', 0, 2, '2019-02-10', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(215, 'Тарас', 'Спендор', 0, 2, '2019-02-09', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(216, 'Наталя', 'Овчаренко', 0, 2, '2019-02-27', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(217, 'Наталя', 'Овчаренко', 0, 2, '2019-02-28', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(218, 'Лiлiя', 'Шеремета', 506755611, 3, '2019-02-16', 2, 210, 'pay', 'worker', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(219, 'Лiлiя', 'Шеремета', 506755611, 3, '2019-02-15', 2, 210, 'pay', 'worker', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(220, 'Наталiя', 'Овчаренко', 0, 3, '2019-02-28', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(221, 'Наталiя', 'Овчаренко', 0, 3, '2019-02-27', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(222, 'Тарас', 'Спендор', 0, 3, '2019-02-10', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(223, 'Тарас', 'Спендор', 0, 3, '2019-02-09', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(224, 'Тарас', 'Спендор', 0, 4, '2019-02-09', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(225, 'Тарас', 'Спендор', 0, 4, '2019-02-10', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(226, 'Наталiя', 'Овчаренко', 0, 4, '2019-02-27', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(227, 'Наталiя', 'Овчаренко', 0, 4, '2019-02-28', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(228, 'Наталiя', 'Овчаренко', 0, 5, '2019-02-27', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(229, 'Наталiя', 'Овчаренко', 0, 5, '2019-02-28', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(230, 'Лiлiя', 'Шеремета', 0, 5, '2019-02-16', 2, 210, 'pay', 'worker', NULL, 'Svyryd Volodimir', '2019-04-09', 'Svyryd Volodimir', '2019-04-09'),
(231, 'Лiлiя', 'Шеремета', 0, 5, '2019-02-15', 2, 210, 'pay', 'worker', NULL, 'Svyryd Volodimir', '2019-04-09', 'Svyryd Volodimir', '2019-04-09'),
(232, 'Тарас', 'Спендор', 0, 5, '2019-02-09', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(233, 'Тарас', 'Спендор', 0, 5, '2019-02-10', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(234, 'Лiлiя', 'Шеремета', 506755611, 6, '2019-02-15', 2, 225, 'pay', 'worker', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(235, 'Лiлiя', 'Шеремета', 506755611, 6, '2019-02-16', 2, 225, 'pay', 'worker', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(236, 'Наталiя', 'Овчаренко', 0, 6, '2019-02-27', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(237, 'Наталiя', 'Овчаренко', 0, 6, '2019-02-28', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(238, 'Тарас', 'Спендор', 0, 6, '2019-02-09', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(239, 'Тарас', 'Спендор', 0, 6, '2019-02-10', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(240, 'Надiя', 'Мислюк', 0, 6, '2019-02-23', 2, 225, 'pay', 'worker', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(241, 'Надiя', 'Мислюк', 0, 6, '2019-02-22', 2, 225, 'pay', 'worker', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(242, 'Наталiя', 'Овчаренко', 0, 7, '2019-02-27', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(243, 'Наталiя', 'Овчаренко', 0, 7, '2019-02-28', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(244, 'ЛIлIя', 'Шеремета', 506755611, 7, '2019-02-15', 2, 210, 'pay', 'worker', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(245, 'ЛIлIя', 'Шеремета', 506755611, 7, '2019-02-16', 2, 210, 'pay', 'worker', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(247, 'Тарас', 'Спендор', 0, 7, '2019-02-10', 5, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(249, 'Тарас', 'Спендор', 0, 7, '2019-02-09', 5, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(251, 'Тарас', 'Спендор', 0, 8, '2019-02-09', 1, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(252, 'Наталiя', 'Овчаренко', 0, 8, '2019-02-28', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(253, 'Наталiя', 'Овчаренко', 0, 8, '2019-02-27', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(254, 'Тарас', 'Спендор', 0, 9, '2019-02-09', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(255, 'Тарас', 'Спендор', 0, 9, '2019-02-10', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(256, 'Ллiя', 'Шеремета', 0, 9, '2019-02-15', 2, 210, 'pay', 'worker', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(257, 'Ллiя', 'Шеремета', 0, 9, '2019-02-16', 2, 210, 'pay', 'worker', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(258, 'Наталiя', 'Овчаренко', 0, 9, '2019-02-28', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(259, 'Наталiя', 'Овчаренко', 0, 9, '2019-02-27', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(260, 'Тарас', 'Спендор', 0, 10, '2019-02-09', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(261, 'Тарас', 'Спендор', 0, 10, '2019-02-10', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(262, 'Наталiя', 'Овчаренко', 0, 10, '2019-02-28', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(263, 'Наталiя', 'Овчаренко', 0, 10, '2019-02-27', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(264, 'Наталiя', 'Овчаренко', 0, 11, '2019-02-28', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(265, 'Наталiя', 'Овчаренко', 0, 11, '2019-02-27', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(266, 'Тарас', 'Спендор', 0, 11, '2019-02-10', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(267, 'Тарас', 'Спендор', 0, 11, '2019-02-09', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(268, 'Лiлiя', 'Шеремета', 0, 11, '2019-02-15', 2, 210, 'pay', 'worker', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(269, 'Лiлiя', 'Шеремета', 0, 11, '2019-02-16', 2, 210, 'pay', 'worker', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(270, 'Наталiя', 'Овчаренко', 0, 12, '2019-02-28', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(271, 'Наталiя', 'Овчаренко', 0, 12, '2019-02-27', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(272, 'Тарас', 'Спендор', 0, 12, '2019-02-08', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(273, 'Тарас', 'Спендор', 0, 12, '2019-02-09', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(274, 'Наталiя', 'Овчаренко', 0, 1, '2019-03-27', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(275, 'Наталiя', 'Овчаренко', 0, 1, '2019-03-28', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(276, 'Тарас', 'Спендор', 0, 1, '2019-03-09', 1, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(277, 'Тарас', 'Спендор', 0, 1, '2019-03-10', 1, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(278, 'Тарас', 'Спендор', 0, 2, '2019-03-09', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(279, 'Тарас', 'Спендор', 0, 2, '2019-03-10', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(280, 'Наталiя', 'Овчаренко', 0, 2, '2019-03-28', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(281, 'Наталiя', 'Овчаренко', 0, 2, '2019-03-27', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(282, 'Наталiя', 'Овчаренко', 0, 3, '2019-03-27', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(283, 'Наталiя', 'Овчаренко', 0, 3, '2019-03-28', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(284, 'Тарас', 'Спендор', 0, 3, '2019-03-10', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(285, 'Тарас', 'Спендор', 0, 3, '2019-03-09', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(286, 'Наталiя', 'Овчаренко', 0, 4, '2019-03-27', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(287, 'Наталiя', 'Овчаренко', 0, 4, '2019-03-28', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(288, 'Тарас', 'Спендор', 0, 4, '2019-03-10', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(289, 'Тарас', 'Спендор', 0, 4, '2019-03-09', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(290, 'Наталiя', 'Овчаренко', 0, 5, '2019-03-28', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(291, 'Наталiя', 'Овчаренко', 0, 5, '2019-03-27', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(292, 'Тарас', 'Спендор', 0, 5, '2019-03-09', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(293, 'Тарас', 'Спендор', 0, 5, '2019-03-10', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(294, 'Тарас', 'Спендор', 0, 6, '2019-03-09', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(295, 'Тарас', 'Спендор', 0, 6, '2019-03-10', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(296, 'Наталiя', 'Овчаренко', 0, 6, '2019-03-28', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(297, 'Наталiя', 'Овчаренко', 0, 6, '2019-03-27', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(298, 'Надiя', 'Мислюк', 0, 6, '2019-03-23', 2, 225, 'pay', 'worker', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(299, 'Надiя', 'Мислюк', 0, 6, '2019-03-22', 2, 225, 'pay', 'worker', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(300, 'Наталiя', 'Овчаренко', 0, 7, '2019-03-28', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(301, 'Наталiя', 'Овчаренко', 0, 7, '2019-03-27', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(302, 'Тарас', 'Спендор', 0, 7, '2019-03-10', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(303, 'Тарас', 'Спендор', 0, 7, '2019-03-09', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(304, 'Тарас', 'Спендор', 0, 8, '2019-03-09', 1, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(305, 'Наталiя', 'Овчаренко', 0, 8, '2019-03-27', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(306, 'Наталiя', 'Овчаренко', 0, 8, '2019-03-28', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(307, 'Тарас', 'Спендор', 0, 9, '2019-03-09', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(308, 'Тарас', 'Спендор', 0, 9, '2019-03-10', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(309, 'Наталiя', 'Овчаренко', 0, 9, '2019-03-28', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(310, 'Наталiя', 'Овчаренко', 0, 9, '2019-03-27', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(311, 'Тарас', 'Спендор', 0, 10, '2019-03-09', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(312, 'Тарас', 'Спендор', 0, 10, '2019-03-10', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(313, 'Наталiя', 'Овчаренко', 0, 10, '2019-03-27', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(314, 'Наталiя', 'Овчаренко', 0, 10, '2019-03-28', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(315, 'Наталiя', 'Овчаренко', 0, 11, '2019-03-27', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(316, 'Наталiя', 'Овчаренко', 0, 11, '2019-03-28', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(317, 'Тарас', 'Спендор', 0, 11, '2019-03-10', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(318, 'Тарас', 'Спендор', 0, 11, '2019-03-09', 2, 420, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(319, 'Наталiя', 'Овчаренко', 0, 12, '2019-03-28', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(320, 'Наталiя', 'Овчаренко', 0, 12, '2019-03-27', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(321, 'Тарас', 'Спендор', 0, 12, '2019-03-09', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL),
(322, 'Тарас', 'Спендор', 0, 12, '2019-03-08', 2, 450, 'pay', 'guest', NULL, 'Svyryd Volodimir', '2019-04-09', NULL, NULL);

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
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=323;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
