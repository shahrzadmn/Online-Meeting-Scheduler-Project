CREATE DATABASE IF NOT EXISTS msdb;

CREATE TABLE msdb.user_tbl
(
user_id int AUTO_INCREMENT primary Key,
user_name varchar(255),
pass varchar(255),
email varchar(255)
);

CREATE TABLE msdb.availability_period
(
av_p_id int AUTO_INCREMENT primary key
);

CREATE TABLE msdb.availability
(
av_id int AUTO_INCREMENT primary key,
av_p_id int,
FOREIGN KEY (av_p_id) REFERENCES msdb.availability_period(av_p_id),
start_dt date,
end_dt date,
is_available boolean,
preference int
);

CREATE TABLE msdb.location
(
location_id	int AUTO_INCREMENT primary key,
location_av_p_id int, 
FOREIGN KEY (location_av_p_id) REFERENCES msdb.availability_period(av_p_id),
loc_name varchar(255)
);


CREATE TABLE msdb.meeting
(
	meeting_id int auto_increment primary key,
	meeting_name varchar(255),	
	meeting_av_p_id int,
	FOREIGN KEY (meeting_av_p_id) REFERENCES msdb.availability_period(av_p_id),
    cancelled_ind boolean
);

CREATE TABLE msdb.attendant
(
meeting_id int,
FOREIGN KEY (meeting_id) REFERENCES msdb.meeting(meeting_id),
attendant_id int primary key,
user_id int, 
FOREIGN KEY (user_id) REFERENCES msdb.user_tbl(user_id),
attendant_av_p_id int,
FOREIGN KEY (attendant_av_p_id) REFERENCES msdb.availability_period(av_p_id), 
is_important boolean,
preferred_location int, 
foreign key (preferred_location) REFERENCES msdb.location(location_id)
);

CREATE TABLE msdb.param (
  `name` VARCHAR(45) NOT NULL,
  `value` VARCHAR(255) NULL,
  PRIMARY KEY (`name`));


