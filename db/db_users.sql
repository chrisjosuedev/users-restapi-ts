create database	db_usersts;

use db_usersts;

create table users(
	`id` INT NOT NULL AUTO_INCREMENT,
    `name` varchar(50) not null,
    `email` varchar(100) not null,
    `status` tinyint default 1,
    constraint pk_idUser primary key (id)
);