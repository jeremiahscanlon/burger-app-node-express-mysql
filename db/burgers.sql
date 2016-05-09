CREATE TABLE `burgers` (
  `id` int(11) NOT NULL,
  `burger_name` varchar(255) NOT NULL,
  `devoured` tinyint(1) NOT NULL DEFAULT '0',
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

INSERT INTO `burgers` (`id`, `burger_name`, `devoured`, `date`) VALUES
(1, 'Double Seceret Probation', 0, '2016-05-09 06:37:21'),
(2, 'Mile High Jalapenos', 0, '2016-05-09 06:37:22'),
(3, 'The Bestest', 0, '2016-05-09 06:35:04');

ALTER TABLE `burgers`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `burgers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
