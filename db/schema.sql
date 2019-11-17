-- Drops DB if it already exists --
DROP DATABASE IF EXISTS sqlzd_burgers_db;

CREATE DATABASE sqlzd_burgers_db;
USE sqlzd_burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	createdAt datetime DEFAULT NULL COMMENT 'created time',
    updatedAt datetime DEFAULT NULL COMMENT 'updated time',
	PRIMARY KEY (id)
);
SELECT * FROM burgers;