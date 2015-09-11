CREATE TABLE `session` (
  `user_id` int(11) NOT NULL,
  `expires` bigint(20) NOT NULL,
  `token` varchar(100) NOT NULL,
  PRIMARY KEY (`token`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

