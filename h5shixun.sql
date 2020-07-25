-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2020-07-25 05:06:13
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `h5shixun`
--

-- --------------------------------------------------------

--
-- 表的结构 `admin_table`
--

CREATE TABLE `admin_table` (
  `admin_name` varchar(16) DEFAULT NULL,
  `admin_password` varchar(16) DEFAULT NULL,
  `admin_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `admin_table`
--

INSERT INTO `admin_table` (`admin_name`, `admin_password`, `admin_id`) VALUES
('李嘉胜', '123', 1),
('李李爱庭庭', 'sunweiting', 3),
('狼人7号', '0101听见吗', 2);

-- --------------------------------------------------------

--
-- 表的结构 `cart_table`
--

CREATE TABLE `cart_table` (
  `shop_id` int(11) DEFAULT NULL,
  `cart_amount` int(11) DEFAULT NULL,
  `cart_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `detailphoto_table`
--

CREATE TABLE `detailphoto_table` (
  `shop_id` int(11) DEFAULT NULL,
  `photo_path` varchar(40) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `detailphoto_table`
--

INSERT INTO `detailphoto_table` (`shop_id`, `photo_path`) VALUES
(10, './photo/shopKobe1.jpg'),
(10, './photo/shopKobe1(1).jpg'),
(10, './photo/shopKobe1(2).jpg'),
(10, './photo/shopKobe1(3).jpg'),
(10, './photo/shopKobe1(4).jpg'),
(10, './photo/shopKobe1(5).jpg'),
(30, './photo/shopGeorge1(1).jpg'),
(30, './photo/shopGeorge1(2).jpg'),
(30, './photo/shopGeorge1(3).jpg'),
(30, './photo/shopGeorge1(4).jpg'),
(30, './photo/shopGeorge1(5).jpg'),
(31, './photo/shopGeorge2.jpg'),
(31, './photo/shopGeorge2(1).jpg'),
(31, './photo/shopGeorge2(2).jpg'),
(31, './photo/shopGeorge2(3).jpg'),
(31, './photo/shopGeorge2(4).jpg'),
(31, './photo/shopGeorge2(5).jpg'),
(32, './photo/shopGeorge2.5.jpg'),
(32, './photo/shopGeorge2.5(1).jpg'),
(32, './photo/shopGeorge2.5(2).jpg'),
(32, './photo/shopGeorge2.5(3).jpg'),
(32, './photo/shopGeorge2.5(4).jpg'),
(32, './photo/shopGeorge2.5(5).jpg'),
(34, './photo/shopGeorge4.jpg'),
(33, './photo/shopGeorge3.jpg'),
(33, './photo/shopGeorge3(1).jpg'),
(33, './photo/shopGeorge3(2).jpg'),
(33, './photo/shopGeorge3(3).jpg'),
(33, './photo/shopGeorge3(4).jpg'),
(33, './photo/shopGeorge3(5).jpg'),
(34, './photo/shopGeorge4(1).jpg'),
(34, './photo/shopGeorge4(2).jpg'),
(34, './photo/shopGeorge4(3).jpg'),
(34, './photo/shopGeorge4(4).jpg'),
(34, './photo/shopGeorge4(5).jpg'),
(1, './photo/shopIrving1.jpg'),
(1, './photo/shopIrving1(1).jpg'),
(1, './photo/shopIrving1(2).jpg'),
(1, './photo/shopIrving1(3).jpg'),
(1, './photo/shopIrving1(4).jpg'),
(1, './photo/shopIrving1(5).jpg'),
(2, './photo/shopIrving2.jpg'),
(2, './photo/shopIrving2(1).jpg'),
(2, './photo/shopIrving2(2).jpg'),
(2, './photo/shopIrving2(3).jpg'),
(2, './photo/shopIrving2(4).jpg'),
(2, './photo/shopIrving2(5).jpg'),
(3, './photo/shopIrving3.jpg'),
(3, './photo/shopIrving3(1).jpg'),
(3, './photo/shopIrving3(2).jpg'),
(3, './photo/shopIrving3(3).jpg'),
(3, './photo/shopIrving3(4).jpg'),
(3, './photo/shopIrving3(5).jpg'),
(4, './photo/shopIrving4.jpg'),
(4, './photo/shopIrving4(1).jpg'),
(4, './photo/shopIrving4(2).jpg'),
(4, './photo/shopIrving4(3).jpg'),
(4, './photo/shopIrving4(4).jpg'),
(4, './photo/shopIrving4(5).jpg'),
(5, './photo/shopIrving5.jpg'),
(5, './photo/shopIrving5(1).jpg'),
(5, './photo/shopIrving5(2).jpg'),
(5, './photo/shopIrving5(3).jpg'),
(5, './photo/shopIrving5(4).jpg'),
(5, './photo/shopIrving5(5).jpg'),
(6, './photo/shopIrving6.jpg'),
(6, './photo/shopIrving6(1).jpg'),
(6, './photo/shopIrving6(2).jpg'),
(6, './photo/shopIrving6(3).jpg'),
(6, './photo/shopIrving6(4).jpg'),
(6, './photo/shopIrving6(5).jpg'),
(7, './photo/shopIrvingLow1.jpg'),
(7, './photo/shopIrvingLow1(1).jpg'),
(7, './photo/shopIrvingLow1(2).jpg'),
(7, './photo/shopIrvingLow1(3).jpg'),
(7, './photo/shopIrvingLow1(4).jpg'),
(7, './photo/shopIrvingLow1(5).jpg'),
(8, './photo/shopIrvingLow2.jpg'),
(8, './photo/shopIrvingLow2(1).jpg'),
(8, './photo/shopIrvingLow2(2).jpg'),
(8, './photo/shopIrvingLow2(3).jpg'),
(8, './photo/shopIrvingLow2(4).jpg'),
(8, './photo/shopIrvingLow2(5).jpg'),
(9, './photo/shopIrvingFlyTrap2.jpg'),
(9, './photo/shopIrvingFlyTrap2(1).jpg'),
(9, './photo/shopIrvingFlyTrap2(2).jpg'),
(9, './photo/shopIrvingFlyTrap2(3).jpg'),
(9, './photo/shopIrvingFlyTrap2(4).jpg'),
(9, './photo/shopIrvingFlyTrap2(5).jpg'),
(11, './photo/shopKobe4.jpg'),
(11, './photo/shopKobe4(1).jpg'),
(11, './photo/shopKobe4(2).jpg'),
(11, './photo/shopKobe4(3).jpg'),
(11, './photo/shopKobe4(4).jpg'),
(11, './photo/shopKobe4(5).jpg'),
(12, './photo/shopKobe5.jpg'),
(12, './photo/shopKobe5(1).jpg'),
(12, './photo/shopKobe5(2).jpg'),
(12, './photo/shopKobe5(3).jpg'),
(12, './photo/shopKobe5(4).jpg'),
(12, './photo/shopKobe5(5).jpg'),
(13, './photo/shopKobe9.jpg'),
(13, './photo/shopKobe9(1).jpg'),
(13, './photo/shopKobe9(2).jpg'),
(13, './photo/shopKobe9(3).jpg'),
(13, './photo/shopKobe9(4).jpg'),
(13, './photo/shopKobe9(5).jpg'),
(14, './photo/shopKobe10.jpg'),
(14, './photo/shopKobe10(1).jpg'),
(14, './photo/shopKobe10(2).jpg'),
(14, './photo/shopKobe10(3).jpg'),
(14, './photo/shopKobe10(4).jpg'),
(14, './photo/shopKobe10(5).jpg'),
(15, './photo/shopKobe10Elite.jpg'),
(15, './photo/shopKobe10Elite(1).jpg'),
(15, './photo/shopKobe10Elite(2).jpg'),
(15, './photo/shopKobe10Elite(3).jpg'),
(15, './photo/shopKobe10Elite(4).jpg'),
(15, './photo/shopKobe10Elite(5).jpg'),
(16, './photo/shopKobe11.jpg'),
(16, './photo/shopKobe11(1).jpg'),
(16, './photo/shopKobe11(2).jpg'),
(16, './photo/shopKobe11(3).jpg'),
(16, './photo/shopKobe11(4).jpg'),
(16, './photo/shopKobe11(5).jpg'),
(17, './photo/shopKobeA.D..jpg'),
(17, './photo/shopKobeA.D.(1).jpg'),
(17, './photo/shopKobeA.D.(2).jpg'),
(17, './photo/shopKobeA.D.(3).jpg'),
(17, './photo/shopKobeA.D.(4).jpg'),
(17, './photo/shopKobeA.D.(5).jpg'),
(18, './photo/shopKobeA.D.Exodus.jpg'),
(18, './photo/shopKobeA.D.Exodus(1).jpg'),
(18, './photo/shopKobeA.D.Exodus(2).jpg'),
(18, './photo/shopKobeA.D.Exodus(3).jpg'),
(18, './photo/shopKobeA.D.Exodus(4).jpg'),
(18, './photo/shopKobeA.D.Exodus(5).jpg'),
(19, './photo/shopKobeA.D.Mid.jpg'),
(19, './photo/shopKobeA.D.Mid(1).jpg'),
(19, './photo/shopKobeA.D.Mid(2).jpg'),
(19, './photo/shopKobeA.D.Mid(3).jpg'),
(19, './photo/shopKobeA.D.Mid(4).jpg'),
(19, './photo/shopKobeA.D.Mid(5).jpg'),
(20, './photo/shopKobeA.D.NXT.jpg'),
(20, './photo/shopKobeA.D.NXT(1).jpg'),
(20, './photo/shopKobeA.D.NXT(2).jpg'),
(20, './photo/shopKobeA.D.NXT(3).jpg'),
(20, './photo/shopKobeA.D.NXT(4).jpg'),
(20, './photo/shopKobeA.D.NXT(5).jpg'),
(21, './photo/shopKobeADNXTFastFit.jpg'),
(21, './photo/shopKobeADNXTFastFit(1).jpg'),
(21, './photo/shopKobeADNXTFastFit(2).jpg'),
(21, './photo/shopKobeADNXTFastFit(3).jpg'),
(21, './photo/shopKobeADNXTFastFit(4).jpg'),
(21, './photo/shopKobeADNXTFastFit(5).jpg'),
(22, './photo/shopKobeMambaFury.jpg'),
(22, './photo/shopKobeMambaFury(1).jpg'),
(22, './photo/shopKobeMambaFury(2).jpg'),
(22, './photo/shopKobeMambaFury(3).jpg'),
(22, './photo/shopKobeMambaFury(4).jpg'),
(22, './photo/shopKobeMambaFury(5).jpg'),
(23, './photo/shopKobeNXT360React.jpg'),
(23, './photo/shopKobeNXT360React(1).jpg'),
(23, './photo/shopKobeNXT360React(2).jpg'),
(23, './photo/shopKobeNXT360React(3).jpg'),
(23, './photo/shopKobeNXT360React(4).jpg'),
(23, './photo/shopKobeNXT360React(5).jpg'),
(24, './photo/shopJames7.jpg'),
(24, './photo/shopJames7(1).jpg'),
(24, './photo/shopJames7(2).jpg'),
(24, './photo/shopJames7(3).jpg'),
(24, './photo/shopJames7(4).jpg'),
(24, './photo/shopJames7(5).jpg'),
(25, './photo/shopJames10.jpg'),
(25, './photo/shopJames10(1).jpg'),
(25, './photo/shopJames10(2).jpg'),
(25, './photo/shopJames10(3).jpg'),
(25, './photo/shopJames10(4).jpg'),
(25, './photo/shopJames10(5).jpg'),
(26, './photo/shopJames12.jpg'),
(26, './photo/shopJames12(1).jpg'),
(26, './photo/shopJames12(2).jpg'),
(26, './photo/shopJames12(3).jpg'),
(26, './photo/shopJames12(4).jpg'),
(26, './photo/shopJames12(5).jpg'),
(27, './photo/shopJames13.jpg'),
(27, './photo/shopJames13(1).jpg'),
(27, './photo/shopJames13(2).jpg'),
(27, './photo/shopJames13(3).jpg'),
(27, './photo/shopJames13(4).jpg'),
(27, './photo/shopJames13(5).jpg'),
(28, './photo/shopJames16.jpg'),
(28, './photo/shopJames16(1).jpg'),
(28, './photo/shopJames16(2).jpg'),
(28, './photo/shopJames16(3).jpg'),
(28, './photo/shopJames16(4).jpg'),
(28, './photo/shopJames16(5).jpg'),
(29, './photo/shopJames17.jpg'),
(29, './photo/shopJames17(1).jpg'),
(29, './photo/shopJames17(2).jpg'),
(29, './photo/shopJames17(3).jpg'),
(29, './photo/shopJames17(4).jpg'),
(29, './photo/shopJames17(5).jpg'),
(30, './photo/shopGeorge1.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `orderdetail_table`
--

CREATE TABLE `orderdetail_table` (
  `order_id` int(11) NOT NULL,
  `shop_id` int(11) DEFAULT NULL,
  `cart_amount` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `ordera_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `orderdetail_table`
--

INSERT INTO `orderdetail_table` (`order_id`, `shop_id`, `cart_amount`, `user_id`, `ordera_id`) VALUES
(57, 31, NULL, 1, 2411981513),
(56, 32, NULL, 1, 2411981513),
(55, 33, NULL, 1, 2411981513),
(54, 26, NULL, 1, 2411981513),
(53, 29, NULL, 1, 2411981513),
(52, 18, NULL, 1, 2411981513),
(51, 13, NULL, 1, 2411981513),
(50, 3, NULL, 1, 2411981513),
(49, 2, NULL, 1, 2411981513);

-- --------------------------------------------------------

--
-- 表的结构 `order_table`
--

CREATE TABLE `order_table` (
  `order_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `ordera_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `order_table`
--

INSERT INTO `order_table` (`order_id`, `user_id`, `ordera_id`) VALUES
(44, 1, 9434047091),
(43, 1, 9434047091),
(42, 1, 9434047091),
(41, 1, 9434047091),
(40, 1, 9434047091),
(39, 1, 9434047091),
(38, 1, 5049570062),
(37, 1, 5049570062),
(36, 1, 5049570062),
(35, 1, 5049570062),
(34, 1, 5049570062),
(33, 1, 5049570062),
(32, 1, 5049570062),
(31, 1, 5049570062),
(30, 1, 5049570062),
(29, 1, 5049570062),
(28, 1, 5610827030),
(27, 1, 5610827030),
(26, 1, 5610827030),
(25, 1, 5610827030),
(24, 1, 5610827030),
(45, 1, 9434047091),
(46, 1, 9434047091),
(47, 1, 9434047091),
(48, 1, 9434047091),
(49, 1, 2411981513),
(50, 1, 2411981513),
(51, 1, 2411981513),
(52, 1, 2411981513),
(53, 1, 2411981513),
(54, 1, 2411981513),
(55, 1, 2411981513),
(56, 1, 2411981513),
(57, 1, 2411981513);

-- --------------------------------------------------------

--
-- 表的结构 `photo_table`
--

CREATE TABLE `photo_table` (
  `photo_id` int(11) NOT NULL,
  `photo_pic` varchar(40) DEFAULT NULL,
  `photo_url` varchar(40) DEFAULT NULL,
  `photo_text` varchar(40) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `photo_table`
--

INSERT INTO `photo_table` (`photo_id`, `photo_pic`, `photo_url`, `photo_text`) VALUES
(1, './photo/RotatingIrving.jpg', 'otherPage.html', '欧文系列帅气'),
(2, './photo/RotatingKobe.jpg', '222', '科比系列'),
(3, './photo/RotatingAJ.jpg', '333', 'AJ系列'),
(4, './photo/RotatingSB.jpg', '111', 'SB系列');

-- --------------------------------------------------------

--
-- 表的结构 `shop_table`
--

CREATE TABLE `shop_table` (
  `shop_id` int(11) NOT NULL,
  `shop_name` varchar(24) DEFAULT NULL,
  `shop_allName` varchar(40) DEFAULT NULL,
  `shop_num` int(11) DEFAULT NULL,
  `shop_pic` varchar(40) DEFAULT NULL,
  `shop_price` decimal(10,0) DEFAULT NULL,
  `shop_page` int(11) DEFAULT NULL,
  `shop_produce` varchar(500) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `shop_table`
--

INSERT INTO `shop_table` (`shop_id`, `shop_name`, `shop_allName`, `shop_num`, `shop_pic`, `shop_price`, `shop_page`, `shop_produce`) VALUES
(1, 'Nike Kyrie Irving 1', '欧文一 欧文1 NikeKyrieIrving1', 500, './photo/shopIrving1.jpg', '1599', 1, NULL),
(2, 'Nike Kyrie 2', '欧文二 欧文2 NikeKyrieIrving2', 78, './photo/shopIrving2.jpg', '1699', 1, NULL),
(3, 'Nike Kyrie 3', '欧文三 欧文3  NikeKyrieIrving3', 100, './photo/shopIrving3.jpg', '2499', 1, NULL),
(4, 'Nike Kyrie 4', '欧文四 欧文4 NikeKyrieIrving4', 65, './photo/shopIrving4.jpg', '1359', 1, NULL),
(5, 'Nike Kyrie 5', '欧文五 欧文5 NikeKyrieIrving5', 150, './photo/shopIrving5.jpg', '1131', 1, NULL),
(6, 'Nike Kyrie 6', '欧文六 欧文6 NikeKyrieIrving6', 198, './photo/shopIrving6.jpg', '499', 1, NULL),
(7, 'Nike Kyire Low 1', '欧文支线一代 欧文支线1代 NikeKyireIrvingLow1', 97, './photo/shopIrvingLow1.jpg', '899', 1, NULL),
(8, 'Nike Kyrie Low 2', '欧文支线二代 欧文支线2代 NikeKyrieLow2', 65, './photo/shopIrvingLow2.jpg', '2629', 1, NULL),
(9, 'Nike Kyire FlyTrap 2', '欧文支线二代 欧文支线2代 NikeKyrieFlyTrap2', 23, './photo/shopIrvingFlyTrap2.jpg', '218', 1, NULL),
(10, 'Nike Kobe 1', 'Kobe1 kobe1 科比一代 科比1代', 150, './photo/shopKobe1.jpg', '2250', 2, '科比·布莱恩特以场上毫不掩饰的真性情，缔造出一场场精彩传奇赛事；Mamba Fury EP 男/女篮球鞋因此得名，采用简约利落的设计，打造轻盈疾速的造型与质感。该鞋款拥有科比系列特有的轻盈灵敏响应力和强悍抓地力。低帮鞋口，让球员在强势切入时自由无阻且迅疾不减。该 EP 版本的外底出众耐穿，可驾驭户外球场。'),
(11, 'Nike Kobe 4', 'Kobe4 kobe4 科比四代 科比4代', 885, './photo/shopKobe4.jpg', '2299', 2, '科比·布莱恩特以场上毫不掩饰的真性情，缔造出一场场精彩传奇赛事；Mamba Fury EP 男/女篮球鞋因此得名，采用简约利落的设计，打造轻盈疾速的造型与质感。该鞋款拥有科比系列特有的轻盈灵敏响应力和强悍抓地力。低帮鞋口，让球员在强势切入时自由无阻且迅疾不减。该 EP 版本的外底出众耐穿，可驾驭户外球场。'),
(12, 'Nike Kobe 5', 'Kobe5 kobe5 科比五代 科比5代', 889, './photo/shopKobe5.jpg', '1467', 2, '科比·布莱恩特以场上毫不掩饰的真性情，缔造出一场场精彩传奇赛事；Mamba Fury EP 男/女篮球鞋因此得名，采用简约利落的设计，打造轻盈疾速的造型与质感。该鞋款拥有科比系列特有的轻盈灵敏响应力和强悍抓地力。低帮鞋口，让球员在强势切入时自由无阻且迅疾不减。该 EP 版本的外底出众耐穿，可驾驭户外球场。'),
(13, 'Nike Kobe 9', 'Kobe9 科比9代 科比九代', 25, './photo/shopKobe9.jpg', '3899', 2, '科比·布莱恩特以场上毫不掩饰的真性情，缔造出一场场精彩传奇赛事；Mamba Fury EP 男/女篮球鞋因此得名，采用简约利落的设计，打造轻盈疾速的造型与质感。该鞋款拥有科比系列特有的轻盈灵敏响应力和强悍抓地力。低帮鞋口，让球员在强势切入时自由无阻且迅疾不减。该 EP 版本的外底出众耐穿，可驾驭户外球场。'),
(14, 'NIke Kobe 10', 'kobe10 科比10代 科比十代', 98, './photo/shopKobe10.jpg', '2799', 2, '科比·布莱恩特以场上毫不掩饰的真性情，缔造出一场场精彩传奇赛事；Mamba Fury EP 男/女篮球鞋因此得名，采用简约利落的设计，打造轻盈疾速的造型与质感。该鞋款拥有科比系列特有的轻盈灵敏响应力和强悍抓地力。低帮鞋口，让球员在强势切入时自由无阻且迅疾不减。该 EP 版本的外底出众耐穿，可驾驭户外球场。'),
(15, 'Nike Kobe 10 Elite', 'kobe10elite 科比十代高帮 科比10代高帮', 32, './photo/shopKobe10Elite.jpg', '2550', 2, '科比·布莱恩特以场上毫不掩饰的真性情，缔造出一场场精彩传奇赛事；Mamba Fury EP 男/女篮球鞋因此得名，采用简约利落的设计，打造轻盈疾速的造型与质感。该鞋款拥有科比系列特有的轻盈灵敏响应力和强悍抓地力。低帮鞋口，让球员在强势切入时自由无阻且迅疾不减。该 EP 版本的外底出众耐穿，可驾驭户外球场。'),
(16, 'Nike Kobe 11', 'kobe11 科比11代 科比十一代', 69, './photo/shopKobe11.jpg', '2459', 2, '科比·布莱恩特以场上毫不掩饰的真性情，缔造出一场场精彩传奇赛事；Mamba Fury EP 男/女篮球鞋因此得名，采用简约利落的设计，打造轻盈疾速的造型与质感。该鞋款拥有科比系列特有的轻盈灵敏响应力和强悍抓地力。低帮鞋口，让球员在强势切入时自由无阻且迅疾不减。该 EP 版本的外底出众耐穿，可驾驭户外球场。'),
(17, 'Nike Kobe A.D.', 'kobe ad 科比AD ', 87, './photo/shopKobeA.D..jpg', '1589', 2, '科比·布莱恩特以场上毫不掩饰的真性情，缔造出一场场精彩传奇赛事；Mamba Fury EP 男/女篮球鞋因此得名，采用简约利落的设计，打造轻盈疾速的造型与质感。该鞋款拥有科比系列特有的轻盈灵敏响应力和强悍抓地力。低帮鞋口，让球员在强势切入时自由无阻且迅疾不减。该 EP 版本的外底出众耐穿，可驾驭户外球场。'),
(18, 'Nike Kobe A.D.Exodus', 'kobeAD 科比AD', 79, './photo/shopKobeA.D.Exodus.jpg', '1299', 2, '科比·布莱恩特以场上毫不掩饰的真性情，缔造出一场场精彩传奇赛事；Mamba Fury EP 男/女篮球鞋因此得名，采用简约利落的设计，打造轻盈疾速的造型与质感。该鞋款拥有科比系列特有的轻盈灵敏响应力和强悍抓地力。低帮鞋口，让球员在强势切入时自由无阻且迅疾不减。该 EP 版本的外底出众耐穿，可驾驭户外球场。'),
(19, 'Nike Kobe A.D.Mid', 'kobeadmid 科比ADmid', 778, './photo/shopKobeA.D.Mid.jpg', '1249', 2, '科比·布莱恩特以场上毫不掩饰的真性情，缔造出一场场精彩传奇赛事；Mamba Fury EP 男/女篮球鞋因此得名，采用简约利落的设计，打造轻盈疾速的造型与质感。该鞋款拥有科比系列特有的轻盈灵敏响应力和强悍抓地力。低帮鞋口，让球员在强势切入时自由无阻且迅疾不减。该 EP 版本的外底出众耐穿，可驾驭户外球场。'),
(20, 'Nike KobeA.D.NXT', 'kobeadnxt 科比nxt', 12, './photo/shopKobeA.D.NXT.jpg', '1789', 2, '科比·布莱恩特以场上毫不掩饰的真性情，缔造出一场场精彩传奇赛事；Mamba Fury EP 男/女篮球鞋因此得名，采用简约利落的设计，打造轻盈疾速的造型与质感。该鞋款拥有科比系列特有的轻盈灵敏响应力和强悍抓地力。低帮鞋口，让球员在强势切入时自由无阻且迅疾不减。该 EP 版本的外底出众耐穿，可驾驭户外球场。'),
(21, 'Nike KobeADMXTFastFit', 'kobeADNXTFastFit 科比ad', 889, './photo/shopKobeADNXTFastFit.jpg', '799', 2, '科比·布莱恩特以场上毫不掩饰的真性情，缔造出一场场精彩传奇赛事；Mamba Fury EP 男/女篮球鞋因此得名，采用简约利落的设计，打造轻盈疾速的造型与质感。该鞋款拥有科比系列特有的轻盈灵敏响应力和强悍抓地力。低帮鞋口，让球员在强势切入时自由无阻且迅疾不减。该 EP 版本的外底出众耐穿，可驾驭户外球场。'),
(22, 'Nike Kobe MambaFury', 'kobemambafury 科比曼巴系列', 56, './photo/shopKobeMambaFury.jpg', '398', 2, '科比·布莱恩特以场上毫不掩饰的真性情，缔造出一场场精彩传奇赛事；Mamba Fury EP 男/女篮球鞋因此得名，采用简约利落的设计，打造轻盈疾速的造型与质感。该鞋款拥有科比系列特有的轻盈灵敏响应力和强悍抓地力。低帮鞋口，让球员在强势切入时自由无阻且迅疾不减。该 EP 版本的外底出众耐穿，可驾驭户外球场。'),
(23, 'Nike Kobe NXT360React', 'kebo nxt360 科比nxt', 97, './photo/shopKobeNXT360React.jpg', '1699', 2, '科比·布莱恩特以场上毫不掩饰的真性情，缔造出一场场精彩传奇赛事；Mamba Fury EP 男/女篮球鞋因此得名，采用简约利落的设计，打造轻盈疾速的造型与质感。该鞋款拥有科比系列特有的轻盈灵敏响应力和强悍抓地力。低帮鞋口，让球员在强势切入时自由无阻且迅疾不减。该 EP 版本的外底出众耐穿，可驾驭户外球场。'),
(24, 'Nike James 7', 'james7 詹姆斯七代 詹姆斯7代', 488, './photo/shopJames7.jpg', '2699', 3, NULL),
(25, 'Nike James 10', 'james10 詹姆斯十代 詹姆斯10代', 445, './photo/shopJames10.jpg', '5569', 3, NULL),
(26, 'Nike James 12', 'james12 詹姆斯十二代 詹姆斯12代', 599, './photo/shopJames12.jpg', '1259', 3, NULL),
(27, 'Nike James 13', 'james13 詹姆斯13代 詹姆斯十三代', 89, './photo/shopJames13.jpg', '2599', 3, NULL),
(28, 'Nike James 16', 'james16 詹姆斯十六代 詹姆斯16代', 59, './photo/shopJames16.jpg', '1566', 3, NULL),
(29, 'Nike James 17', 'james17 詹姆斯十七代  詹姆斯17代', 95, './photo/shopJames17.jpg', '1549', 3, NULL),
(30, 'Nike Paul George 1', 'Paulgeorge1 保罗乔治一代 保罗乔治1代', 444, './photo/shopGeorge1.jpg', '1299', 4, NULL),
(31, 'Nike Paul George 2', 'PaulGeorge2 保罗乔治2代 保罗乔治二代', 98, './photo/shopGeorge2.jpg', '1100', 4, NULL),
(32, 'Nike Paul George 2.5', 'paulgeogre2.5 保罗乔治2.5代 ', 955, './photo/shopGeorge2.5.jpg', '1255', 4, NULL),
(33, 'Nike Paul George 3', 'paulgeorge3 保罗乔治3代 保罗乔治三代', 82, './photo/shopGeorge3.jpg', '899', 4, NULL),
(34, 'Nike Paul George 4', 'paulgeorge4 保罗乔治4代 保罗乔治四代', 825, './photo/shopGeorge4.jpg', '599', 4, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `user_table`
--

CREATE TABLE `user_table` (
  `user_id` int(11) NOT NULL,
  `user_password` varchar(16) DEFAULT NULL,
  `user_address` varchar(40) DEFAULT NULL,
  `user_tel` bigint(20) DEFAULT NULL,
  `user_name` varchar(16) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user_table`
--

INSERT INTO `user_table` (`user_id`, `user_password`, `user_address`, `user_tel`, `user_name`) VALUES
(1, '123', '黑龙江省白龙市新会区叠翠园', 12395695804, '李嘉胜'),
(2, 'lijia000', '吉林省重庆市太湖镇', 13265494689, '孙靓女');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_table`
--
ALTER TABLE `admin_table`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `cart_table`
--
ALTER TABLE `cart_table`
  ADD PRIMARY KEY (`cart_id`),
  ADD KEY `FK_Reference_6` (`user_id`),
  ADD KEY `FK_Reference_7` (`shop_id`);

--
-- Indexes for table `detailphoto_table`
--
ALTER TABLE `detailphoto_table`
  ADD PRIMARY KEY (`photo_path`);

--
-- Indexes for table `orderdetail_table`
--
ALTER TABLE `orderdetail_table`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `FK_Reference_5` (`shop_id`);

--
-- Indexes for table `order_table`
--
ALTER TABLE `order_table`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `FK_Reference_11` (`user_id`);

--
-- Indexes for table `photo_table`
--
ALTER TABLE `photo_table`
  ADD PRIMARY KEY (`photo_id`);

--
-- Indexes for table `shop_table`
--
ALTER TABLE `shop_table`
  ADD PRIMARY KEY (`shop_id`);

--
-- Indexes for table `user_table`
--
ALTER TABLE `user_table`
  ADD PRIMARY KEY (`user_id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `admin_table`
--
ALTER TABLE `admin_table`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- 使用表AUTO_INCREMENT `cart_table`
--
ALTER TABLE `cart_table`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;
--
-- 使用表AUTO_INCREMENT `orderdetail_table`
--
ALTER TABLE `orderdetail_table`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;
--
-- 使用表AUTO_INCREMENT `order_table`
--
ALTER TABLE `order_table`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;
--
-- 使用表AUTO_INCREMENT `photo_table`
--
ALTER TABLE `photo_table`
  MODIFY `photo_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- 使用表AUTO_INCREMENT `shop_table`
--
ALTER TABLE `shop_table`
  MODIFY `shop_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
--
-- 使用表AUTO_INCREMENT `user_table`
--
ALTER TABLE `user_table`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
