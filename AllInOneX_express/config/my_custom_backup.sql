-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: express_app
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `comment_id` int NOT NULL AUTO_INCREMENT,
  `post_id` int NOT NULL,
  `user_id` int NOT NULL,
  `comment_text` text NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_active` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`comment_id`),
  KEY `post_id` (`post_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`) ON DELETE CASCADE,
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `likes` (
  `like_id` int NOT NULL AUTO_INCREMENT,
  `post_id` int NOT NULL,
  `user_id` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`like_id`),
  UNIQUE KEY `post_id` (`post_id`,`user_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`) ON DELETE CASCADE,
  CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post_media`
--

DROP TABLE IF EXISTS `post_media`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post_media` (
  `media_id` int NOT NULL AUTO_INCREMENT,
  `post_id` int NOT NULL,
  `media_url` varchar(255) NOT NULL,
  `media_type` enum('image','video') NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`media_id`),
  KEY `post_id` (`post_id`),
  CONSTRAINT `post_media_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post_media`
--

LOCK TABLES `post_media` WRITE;
/*!40000 ALTER TABLE `post_media` DISABLE KEYS */;
/*!40000 ALTER TABLE `post_media` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `post_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `post_title` varchar(255) DEFAULT NULL,
  `post_caption` text,
  `media_type` enum('image','video','carousel') NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_active` tinyint(1) DEFAULT '1',
  `visibility` enum('public','private','friends') DEFAULT 'public',
  `tags` json DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`post_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,1,'Updated Post Title','Updated Caption','image','2025-01-24 13:11:04','2025-01-24 14:06:04',1,'friends','[\"#fun\", \"#coding\"]','San Francisco'),(2,2,'My Travel Post','Exploring new places!','image','2025-01-24 13:12:47','2025-01-24 14:26:03',0,'friends','[\"#travel\", \"#adventure\"]','Himalayas'),(3,2,'My Travel Post','Exploring new places!','image','2025-01-24 14:08:40','2025-01-24 14:08:40',1,'friends','[\"#travel\", \"#adventure\"]','Himalayas'),(4,2,'My Travel Post 2','Exploring new places!!','image','2025-01-24 14:12:25','2025-01-24 14:12:25',1,'friends','[\"#travel\", \"#adventure\"]','Himalayas'),(5,2,'My Travel Post 2','Exploring new places!!','image','2025-01-24 14:12:27','2025-01-24 14:12:27',1,'friends','[\"#travel\", \"#adventure\"]','Himalayas'),(6,2,'My Travel Post 2','Exploring new places!!','image','2025-01-24 14:12:28','2025-01-24 14:12:28',1,'friends','[\"#travel\", \"#adventure\"]','Himalayas'),(7,2,'My Travel Post','Exploring new places!','image','2025-01-24 18:20:28','2025-01-24 18:20:28',1,'friends','[\"#travel\", \"#adventure\"]','Himalayas'),(8,2,'What is Lorem Ipsum?','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','image','2025-01-24 18:27:12','2025-01-24 18:27:12',1,'public','[]','Unknown'),(9,2,'Request by om','Exploring new places! Default','image','2025-01-24 18:33:37','2025-01-24 18:33:37',1,'friends','[\"#travel\", \"#adventure\"]','Himalayas'),(10,2,'This is private post','this is private post description','image','2025-01-24 18:43:43','2025-01-24 18:43:43',1,'private','[\"#insta #sociaMedia #india #fashion \"]','Unknown'),(11,2,'asdfasdf','asdfasdf','image','2025-01-24 19:00:00','2025-01-24 19:00:00',1,'public','[\"asdfasdf\"]','Unknown'),(12,2,'This is my demo post!','This is demo desc','image','2025-01-26 18:07:52','2025-01-26 18:07:52',1,'public','[\"demo first instbinsta\"]','Unknown'),(13,24,'This is testing user id field post','This is testing user id field postThis is testing user id field postThis is testing user id field postThis is testing user id field post','image','2025-01-26 18:54:58','2025-01-26 18:54:58',1,'public','[\"checkin user_ID\"]','Unknown');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `created_by` int DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `mobile` varchar(15) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `status` enum('active','inactive','banned') DEFAULT 'active',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `last_login` timestamp NULL DEFAULT NULL,
  `role` enum('user','admin','moderator') DEFAULT 'user',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `mobile` (`mobile`),
  KEY `created_by` (`created_by`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,NULL,'admin','admin@example.com','1234567890','admin','active','2025-01-23 16:11:36','2025-01-23 16:11:36',NULL,'admin'),(2,1,'Omkar','omkar@example.com','1234567891','admin','active','2025-01-23 16:13:03','2025-01-23 16:13:03',NULL,'admin'),(3,1,'johndoe','john@example.com','1234567892','hashedpassword','inactive','2025-01-23 17:10:19','2025-01-24 10:11:01',NULL,'user'),(4,NULL,'patric123','','','asdf','active','2025-01-25 19:38:21','2025-01-25 19:38:21',NULL,'user'),(13,NULL,'patric123456','gaytribachhav6868@gmail.com','1231231233','1234567','active','2025-01-25 19:50:21','2025-01-25 19:50:21',NULL,'user'),(14,NULL,'asdw','gaytribachhav6868@gmail.coms','1231231234','sdf','active','2025-01-25 19:52:25','2025-01-25 19:52:25',NULL,'user'),(15,NULL,'asdwa','gaytribachhav6868@gmail.comsa','1231231235','sdf','active','2025-01-25 19:54:26','2025-01-25 19:54:26',NULL,'user'),(16,NULL,'asdwa1','gaytribachhav6868@gmail.comsb','1231231236','sdf','active','2025-01-25 19:56:38','2025-01-25 19:56:38',NULL,'user'),(19,NULL,'katpat',NULL,NULL,'123','active','2025-01-25 20:10:00','2025-01-25 20:10:00',NULL,'user'),(20,NULL,'a',NULL,NULL,'a','active','2025-01-25 20:10:21','2025-01-25 20:10:21',NULL,'user'),(21,NULL,'b',NULL,NULL,'b','active','2025-01-25 20:13:56','2025-01-25 20:13:56',NULL,'user'),(22,NULL,'c',NULL,NULL,'c','active','2025-01-25 20:27:58','2025-01-25 20:27:58',NULL,'user'),(23,NULL,'jay',NULL,NULL,'123','active','2025-01-26 17:58:03','2025-01-26 17:58:03',NULL,'user'),(24,NULL,NULL,NULL,'8767424655','123','active','2025-01-26 17:59:39','2025-01-26 17:59:39',NULL,'user'),(26,NULL,'asd',NULL,NULL,'123','active','2025-01-26 18:41:51','2025-01-26 18:41:51',NULL,'user'),(27,NULL,'asdf',NULL,NULL,'123','active','2025-01-26 18:43:07','2025-01-26 18:43:07',NULL,'user');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-27  9:23:43
