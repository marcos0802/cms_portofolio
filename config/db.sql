

CREATE TABLE `cms_projects` (
  `id` int(11) AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) NOT NULL,
  `snippet` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `picture_url` varchar(255) NOT NULL,
  `c_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;