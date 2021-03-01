DROP DATABASE IF EXISTS `high_score`;
CREATE DATABASE IF NOT EXISTS `high_score`;
USE `high_score` ;

DROP TABLE IF EXISTS `users`;

CREATE TABLE IF NOT EXISTS `users` ( 
  `id` INT NOT NULL AUTO_INCREMENT KEY, 
  `name` VARCHAR(45) NOT NULL, 
  `seconds` INT NOT NULL, 
  `minutes` INT NOT NULL, 
  `safeSpaces` INT NOT NULL, 
  `score` INT NOT NULL);
