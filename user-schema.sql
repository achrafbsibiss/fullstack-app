create TABLE `raddy` . `voip` (
	`id` int not null Primary key AUTO_INCREMENT,
    `name` varchar(60) not null,
    `email` varchar(45) not null,
    `number` varchar(10)not null,
    `message` text 

) ENGINE = InnoDB;