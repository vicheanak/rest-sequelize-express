-- MySQL dump 10.13  Distrib 5.7.18, for osx10.12 (x86_64)
--
-- Host: 127.0.0.1    Database: perfectstore_development
-- ------------------------------------------------------
-- Server version	5.7.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `perfectstore_development`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `perfectstore_development` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;

USE `perfectstore_development`;

--
-- Table structure for table `DISPLAY_TYPEs`
--

DROP TABLE IF EXISTS `DISPLAY_TYPEs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `DISPLAY_TYPEs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DISPLAY_TYPEs`
--

LOCK TABLES `DISPLAY_TYPEs` WRITE;
/*!40000 ALTER TABLE `DISPLAY_TYPEs` DISABLE KEYS */;
INSERT INTO `DISPLAY_TYPEs` VALUES (1,'ឈុតចាំបាច់សម្រាប់តាំង',1,'2017-10-20 01:25:50','2017-10-22 07:21:32'),(2,'ឈុតព្យួរផលិតផល',1,'2017-10-20 01:25:50','2017-10-22 07:21:43'),(3,'ឈុតសម្រាប់តាំងលើធ្នើរ',1,'2017-10-20 01:25:50','2017-10-22 07:21:59');
/*!40000 ALTER TABLE `DISPLAY_TYPEs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `DISPLAYs`
--

DROP TABLE IF EXISTS `DISPLAYs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `DISPLAYs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `points` int(11) DEFAULT NULL,
  `imageUrl` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `displayTypeIdDisplays` int(11) DEFAULT NULL,
  `storeTypeIdDisplays` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `displayTypeIdDisplays_foreign_idx` (`displayTypeIdDisplays`),
  KEY `storeTypeIdDisplays_foreign_idx` (`storeTypeIdDisplays`),
  CONSTRAINT `displayTypeIdDisplays_foreign_idx` FOREIGN KEY (`displayTypeIdDisplays`) REFERENCES `DISPLAY_TYPEs` (`id`),
  CONSTRAINT `storeTypeIdDisplays_foreign_idx` FOREIGN KEY (`storeTypeIdDisplays`) REFERENCES `STORE_TYPEs` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DISPLAYs`
--

LOCK TABLES `DISPLAYs` WRITE;
/*!40000 ALTER TABLE `DISPLAYs` DISABLE KEYS */;
INSERT INTO `DISPLAYs` VALUES (1,'ឈុតចាំបាច់ ២',600,'localhost:8080/img/gallery/d1.jpg',1,'2017-10-20 01:25:50','2017-10-23 00:46:22',1,1),(2,'ឈុតដាក់លើធ្នើរ 1',1600,'localhost:8080/img/gallery/d2.jpg',1,'2017-10-20 01:25:50','2017-10-23 00:45:21',3,2),(3,'ឈុតដាក់ ព្យួរ 1',800,'localhost:8080/img/gallery/d3.jpg',1,'2017-10-20 01:25:50','2017-10-23 00:45:13',2,3),(4,'ឈុតចាំបាច់ ១',300,'localhost:8080/img/gallery/d1.jpg',1,'2017-10-20 01:25:50','2017-10-23 00:46:05',1,1),(5,'ឈុតដាក់លើធ្នើរ 2',3600,'localhost:8080/img/gallery/d2.jpg',1,'2017-10-20 01:25:50','2017-10-23 00:44:55',3,2),(6,'ឈុតដាក់ ព្យួរ 2',1200,'localhost:8080/img/gallery/d3.jpg',1,'2017-10-20 01:25:50','2017-10-23 00:45:42',2,3);
/*!40000 ALTER TABLE `DISPLAYs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `REWARDs`
--

DROP TABLE IF EXISTS `REWARDs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `REWARDs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `points` int(11) DEFAULT NULL,
  `imageUrl` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `REWARDs`
--

LOCK TABLES `REWARDs` WRITE;
/*!40000 ALTER TABLE `REWARDs` DISABLE KEYS */;
INSERT INTO `REWARDs` VALUES (1,'TV',30000,'localhost:3000/public/uploads/f1a1feb9-7eb7-45b1-bd5b-4582438559b0.png',1,'2017-10-20 01:25:50','2017-10-20 01:25:50'),(2,'FRIDGE',20000,'localhost:3000/public/uploads/de1dbb5a-32fb-4473-a6a9-3a21e14d78b0.png',1,'2017-10-20 01:25:50','2017-10-20 01:25:50'),(3,'MICROWAVE',10000,'localhost:3000/public/uploads/a0cca549-4d60-4ded-8ae1-5cba5513fdbd.png',1,'2017-10-20 01:25:50','2017-10-20 01:25:50');
/*!40000 ALTER TABLE `REWARDs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `STORES_REWARDs`
--

DROP TABLE IF EXISTS `STORES_REWARDs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `STORES_REWARDs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` int(11) DEFAULT NULL,
  `imageUrl` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `deliveriedAt` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `storeIdStoresRewards` int(11) DEFAULT NULL,
  `rewardIdStoresRewards` int(11) DEFAULT NULL,
  `points` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `storeIdStoresRewards_foreign_idx` (`storeIdStoresRewards`),
  KEY `rewardIdStoresRewards_foreign_idx` (`rewardIdStoresRewards`),
  CONSTRAINT `rewardIdStoresRewards_foreign_idx` FOREIGN KEY (`rewardIdStoresRewards`) REFERENCES `REWARDS` (`id`),
  CONSTRAINT `storeIdStoresRewards_foreign_idx` FOREIGN KEY (`storeIdStoresRewards`) REFERENCES `STOREs` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `STORES_REWARDs`
--

LOCK TABLES `STORES_REWARDs` WRITE;
/*!40000 ALTER TABLE `STORES_REWARDs` DISABLE KEYS */;
INSERT INTO `STORES_REWARDs` VALUES (1,1,'localhost:8080/img/gallery/deliver_slip1.jpg','2017-10-20 01:25:50','2017-10-20 01:25:50','2017-10-20 01:25:50',1,1,500),(2,1,'localhost:8080/img/gallery/deliver_slip1.jpg','2017-10-20 01:25:50','2017-10-20 01:25:50','2017-10-20 01:25:50',1,2,500),(3,2,'localhost:8080/img/gallery/deliver_slip1.jpg',NULL,'2017-10-20 01:25:50','2017-10-20 01:25:50',1,3,500),(4,1,'localhost:8080/img/gallery/deliver_slip1.jpg',NULL,'2017-10-20 01:25:50','2017-10-20 01:25:50',2,1,500),(5,1,'localhost:8080/img/gallery/deliver_slip1.jpg',NULL,'2017-10-20 01:25:50','2017-10-20 01:25:50',2,2,500),(6,2,'localhost:8080/img/gallery/deliver_slip1.jpg',NULL,'2017-10-20 01:25:50','2017-10-20 01:25:50',2,3,500);
/*!40000 ALTER TABLE `STORES_REWARDs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `STORE_IMAGEs`
--

DROP TABLE IF EXISTS `STORE_IMAGEs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `STORE_IMAGEs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imageUrl` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `capturedAt` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `storeIdStoreImages` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `storeIdStoreImages_foreign_idx` (`storeIdStoreImages`),
  CONSTRAINT `storeIdStoreImages_foreign_idx` FOREIGN KEY (`storeIdStoreImages`) REFERENCES `STORES` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `STORE_IMAGEs`
--

LOCK TABLES `STORE_IMAGEs` WRITE;
/*!40000 ALTER TABLE `STORE_IMAGEs` DISABLE KEYS */;
INSERT INTO `STORE_IMAGEs` VALUES (1,'localhost:3000/public/uploads/f1a1feb9-7eb7-45b1-bd5b-4582438559b0.png','2017-10-20 01:25:50','2017-10-20 01:25:50','2017-10-20 01:25:50',1),(2,'localhost:3000/public/uploads/de1dbb5a-32fb-4473-a6a9-3a21e14d78b0.png','2017-10-20 01:25:50','2017-10-20 01:25:50','2017-10-20 01:25:50',1),(3,'localhost:3000/public/uploads/a0cca549-4d60-4ded-8ae1-5cba5513fdbd.png','2017-10-20 01:25:50','2017-10-20 01:25:50','2017-10-20 01:25:50',1),(4,'192.168.8.103:3000/public/uploads/1508749235295.jpg','2017-10-23 09:03:55','2017-10-23 09:03:55','2017-10-23 09:03:55',1),(5,'192.168.8.103:3000/public/uploads/1508749235295.jpg','2017-10-23 09:05:01','2017-10-23 09:05:01','2017-10-23 09:05:01',1),(6,'192.168.8.103:3000/public/uploads/1508749781805.jpg','2017-10-23 09:09:55','2017-10-23 09:09:55','2017-10-23 09:09:55',1),(7,'192.168.8.103:3000/public/uploads/1508750183546.jpg','2017-10-23 09:16:45','2017-10-23 09:16:45','2017-10-23 09:16:45',1),(8,'192.168.8.103:3000/public/uploads/1508761771705.jpg','2017-10-23 12:30:18','2017-10-23 12:30:18','2017-10-23 12:30:18',1),(9,'192.168.8.103:3000/public/uploads/1508806242460.jpg','2017-10-24 00:50:45','2017-10-24 00:50:45','2017-10-24 00:50:45',1),(10,'192.168.8.103:3000/public/uploads/1508806242460.jpg','2017-10-24 00:50:59','2017-10-24 00:50:59','2017-10-24 00:50:59',1),(11,'192.168.8.103:3000/public/uploads/1508806705729.jpg','2017-10-24 00:58:53','2017-10-24 00:58:53','2017-10-24 00:58:53',1);
/*!40000 ALTER TABLE `STORE_IMAGEs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `STORE_POINTs`
--

DROP TABLE IF EXISTS `STORE_POINTs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `STORE_POINTs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `points` int(11) DEFAULT NULL,
  `imageUrl` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `storeIdStorePoints` int(11) DEFAULT NULL,
  `userIdStorePoints` int(11) DEFAULT NULL,
  `displayIdStorePoints` int(11) DEFAULT NULL,
  `storeImageIdStorePoints` int(11) DEFAULT NULL,
  `uId` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `storeIdStorePoints_foreign_idx` (`storeIdStorePoints`),
  KEY `userIdStorePoints_foreign_idx` (`userIdStorePoints`),
  KEY `displayIdStorePoints_foreign_idx` (`displayIdStorePoints`),
  KEY `storeImageIdStorePoints_foreign_idx` (`storeImageIdStorePoints`),
  CONSTRAINT `displayIdStorePoints_foreign_idx` FOREIGN KEY (`displayIdStorePoints`) REFERENCES `DISPLAYS` (`id`),
  CONSTRAINT `storeIdStorePoints_foreign_idx` FOREIGN KEY (`storeIdStorePoints`) REFERENCES `STORES` (`id`),
  CONSTRAINT `storeImageIdStorePoints_foreign_idx` FOREIGN KEY (`storeImageIdStorePoints`) REFERENCES `STORE_IMAGEs` (`id`),
  CONSTRAINT `userIdStorePoints_foreign_idx` FOREIGN KEY (`userIdStorePoints`) REFERENCES `USERS` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `STORE_POINTs`
--

LOCK TABLES `STORE_POINTs` WRITE;
/*!40000 ALTER TABLE `STORE_POINTs` DISABLE KEYS */;
INSERT INTO `STORE_POINTs` VALUES (32,100,'192.168.8.103:3000/public/uploads/1508750170944.jpg','2017-10-23 09:16:45','2017-10-23 09:16:45',1,3,4,7,'2tnf4'),(33,1600,'192.168.8.103:3000/public/uploads/1508750200762.jpg','2017-10-23 09:16:45','2017-10-23 09:16:45',1,3,2,7,'3npaz'),(34,200,'192.168.8.103:3000/public/uploads/1508761760514.jpg','2017-10-23 12:30:18','2017-10-23 12:30:18',1,3,4,8,'qyny8'),(35,1600,'192.168.8.103:3000/public/uploads/1508761800377.jpg','2017-10-23 12:30:18','2017-10-23 12:30:18',1,3,2,8,'0ihns'),(36,800,'192.168.8.103:3000/public/uploads/1508761785551.jpg','2017-10-23 12:30:18','2017-10-23 12:30:18',1,3,3,8,'9rs6f'),(37,300,'http://192.168.8.103:3000/public/uploads/1508806255097.jpg','2017-10-24 00:50:59','2017-10-24 00:50:59',1,3,4,10,'p7ui9'),(38,300,'http://192.168.8.103:3000/public/uploads/1508806715072.jpg','2017-10-24 00:58:53','2017-10-24 00:58:53',1,3,4,11,'ky5qz'),(39,2300,'http://192.168.8.103:3000/public/uploads/1508806728832.jpg','2017-10-24 00:58:53','2017-10-24 00:58:53',1,3,5,11,'kw5iy');
/*!40000 ALTER TABLE `STORE_POINTs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `STORE_TYPEs`
--

DROP TABLE IF EXISTS `STORE_TYPEs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `STORE_TYPEs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text COLLATE utf8_unicode_ci,
  `status` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `STORE_TYPEs`
--

LOCK TABLES `STORE_TYPEs` WRITE;
/*!40000 ALTER TABLE `STORE_TYPEs` DISABLE KEYS */;
INSERT INTO `STORE_TYPEs` VALUES (1,'FOOD GOLD',1,'2017-10-20 01:25:50','2017-10-20 01:25:50'),(2,'HPC GOLD',1,'2017-10-20 01:25:50','2017-10-20 01:25:50'),(3,'SKIN CARE GOLD',1,'2017-10-20 01:25:50','2017-10-20 01:25:50');
/*!40000 ALTER TABLE `STORE_TYPEs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `STOREs`
--

DROP TABLE IF EXISTS `STOREs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `STOREs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `location` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `storeTypeIdStores` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `storeTypeIdStores_foreign_idx` (`storeTypeIdStores`),
  CONSTRAINT `storeTypeIdStores_foreign_idx` FOREIGN KEY (`storeTypeIdStores`) REFERENCES `STORE_TYPEs` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `STOREs`
--

LOCK TABLES `STOREs` WRITE;
/*!40000 ALTER TABLE `STOREs` DISABLE KEYS */;
INSERT INTO `STOREs` VALUES (1,'Store 1','Phnom Penh','012111111','store1','$2a$10$7cZltRpyWE5WH6LSHVMlse2AW2/P.jywT0n87YoliM3uB4H4FrRs2','',1,'2017-10-20 01:25:50','2017-10-20 01:25:50',1),(2,'Store 2','Phnom Penh','012222222','store2','$2a$10$7cZltRpyWE5WH6LSHVMlse2AW2/P.jywT0n87YoliM3uB4H4FrRs2','',1,'2017-10-20 01:25:50','2017-10-20 01:25:50',2),(3,'Store 3','Phnom Penh','012333333','store3012333333','123456','',1,'2017-10-20 01:25:50','2017-10-20 01:25:50',3),(4,'Store 4','Phnom Penh','012444444','store4012444444','123456','',1,'2017-10-20 01:25:50','2017-10-20 01:25:50',1),(5,'Store 5','Phnom Penh','012555555','store5012555555','123456','',1,'2017-10-20 01:25:50','2017-10-20 01:25:50',2),(6,'Store 6','Phnom Penh','012666666','store6012666666','123456','',1,'2017-10-20 01:25:50','2017-10-20 01:25:50',3);
/*!40000 ALTER TABLE `STOREs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `SequelizeMeta_name_unique` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('20171004035040-create-store-types.js'),('20171004035301-create-displays.js'),('20171004041142-create-display-types.js'),('20171004041546-create-stores.js'),('20171004042524-create-stores-rewards.js'),('20171004042614-create-rewards.js'),('20171004042809-create-store-points.js'),('20171004042958-create-users.js'),('20171004125958-relation-displays.js'),('20171004130024-relation-stores.js'),('20171004130034-relation-store-rewards.js'),('20171004130045-relation-store-points.js'),('20171004143234-addcolumn-displays-storetypes.js'),('20171004143320-addcolumn-storerewards-rewardid.js'),('20171004143337-addcolumn-storepoints-userid.js'),('20171005031446-addcolumn-storepoints-displayid.js'),('20171005032443-create-users-stores.js'),('20171005032552-addcolumn-usersstores-userid.js'),('20171005032558-addcolumn-usersstores-storeid.js'),('20171019175250-create-store-images.js'),('20171019175732-addcolumn-storeimages-storeid.js'),('20171023012652-addcolumn-storepoints-storeimageid.js'),('20171023083941-addcolumn-uid-store-to-store-points.js'),('20171023141322-addcolumn-points-to-store-rewards.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `USERS_STOREs`
--

DROP TABLE IF EXISTS `USERS_STOREs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `USERS_STOREs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userIdUsersStores` int(11) DEFAULT NULL,
  `storeIdUsersStores` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userIdUsersStores_foreign_idx` (`userIdUsersStores`),
  KEY `storeIdUsersStores_foreign_idx` (`storeIdUsersStores`),
  CONSTRAINT `storeIdUsersStores_foreign_idx` FOREIGN KEY (`storeIdUsersStores`) REFERENCES `STORES` (`id`),
  CONSTRAINT `userIdUsersStores_foreign_idx` FOREIGN KEY (`userIdUsersStores`) REFERENCES `USERS` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `USERS_STOREs`
--

LOCK TABLES `USERS_STOREs` WRITE;
/*!40000 ALTER TABLE `USERS_STOREs` DISABLE KEYS */;
INSERT INTO `USERS_STOREs` VALUES (1,'2017-10-20 01:25:50','2017-10-20 01:25:50',3,1),(2,'2017-10-20 01:25:50','2017-10-20 01:25:50',3,2),(3,'2017-10-20 01:25:50','2017-10-20 01:25:50',3,3);
/*!40000 ALTER TABLE `USERS_STOREs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `USERs`
--

DROP TABLE IF EXISTS `USERs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `USERs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fullname` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `role` int(11) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `USERs`
--

LOCK TABLES `USERs` WRITE;
/*!40000 ALTER TABLE `USERs` DISABLE KEYS */;
INSERT INTO `USERs` VALUES (1,'Fullname 1','admin','$2a$10$7cZltRpyWE5WH6LSHVMlse2AW2/P.jywT0n87YoliM3uB4H4FrRs2','012222222','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.ImIzOTMxZDM3LTQzNzQtNGQ2ZS1hYTBlLWEwNWFlNGU4Y2UxYSI.MjZKv174XmA4K4rlVbF82KsJJvfol16V5ZXkiDEGwik',1,1,'2017-10-20 01:25:50','2017-10-23 16:49:13'),(2,'Fullname 2','viewer','$2a$10$7cZltRpyWE5WH6LSHVMlse2AW2/P.jywT0n87YoliM3uB4H4FrRs2','012222222','111',2,1,'2017-10-20 01:25:50','2017-10-20 01:25:50'),(3,'Fullname 3','auditor','$2a$10$7cZltRpyWE5WH6LSHVMlse2AW2/P.jywT0n87YoliM3uB4H4FrRs2','012222222','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.IjBkNmNhNDM2LWM1NWItNGUwZC1hYTFjLTYwZWE5MTE0ODMyMiI.3o0prpu48IHLeWGpGyBhC8VZs4zn04bhE4xq8egUMs4',3,1,'2017-10-20 01:25:50','2017-10-24 00:59:57');
/*!40000 ALTER TABLE `USERs` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-10-24  8:46:53
