--

-- Dumping data for table `club`

--

LOCK TABLES `club` WRITE;

INSERT INTO `club`
VALUES (1, 'FC Barcelona'), (2, 'Argentina'), (3, 'Espanyol'), (4, 'Osasuna'), (5, 'Gramenet'), (6, 'Malaga'), (7, 'Shakhtar Donetsk'), (8, 'Albacete'), (9, 'Levante'), (10, 'Getafe');

UNLOCK TABLES;

--

-- Dumping data for table `competition`

--

LOCK TABLES `competition` WRITE;

INSERT INTO `competition`
VALUES (1, 'La Liga'), (2, 'Copa del Rey'), (3, 'UEFA Champions League');

UNLOCK TABLES;

--

-- Dumping data for table `game`

--

LOCK TABLES `game` WRITE;

INSERT INTO `game`
VALUES (
        1,
        1,
        3,
        '2004-2005',
        1,
        '7',
        2,
        'AWAY',
        '0-1',
        NULL,
        NULL,
        'FINISHED',
        '2004-10-16 17:00:00'
    ), (
        2,
        1,
        4,
        '2004-2005',
        1,
        '8',
        1,
        'HOME',
        '3-0',
        NULL,
        NULL,
        'FINISHED',
        '2004-10-24 14:00:00'
    ), (
        3,
        1,
        5,
        '2004-2005',
        2,
        '1/32',
        3,
        'AWAY',
        '0-0',
        '1-0',
        NULL,
        'FINISHED',
        '2004-10-27 15:45:00'
    ), (
        4,
        1,
        6,
        '2004-2005',
        1,
        '14',
        1,
        'HOME',
        '4-0',
        NULL,
        NULL,
        'FINISHED',
        '2004-12-04 15:00:00'
    ), (
        5,
        1,
        7,
        '2004-2005',
        3,
        '6',
        4,
        'AWAY',
        '2-0',
        NULL,
        NULL,
        'FINISHED',
        '2004-12-07 15:45:00'
    ), (
        6,
        1,
        8,
        '2004-2005',
        1,
        '15',
        5,
        'AWAY',
        '1-2',
        NULL,
        NULL,
        'FINISHED',
        '2004-12-11 15:00:00'
    ), (
        7,
        1,
        9,
        '2004-2005',
        1,
        '17',
        1,
        'HOME',
        '2-1',
        NULL,
        NULL,
        'FINISHED',
        '2004-12-21 15:00:00'
    ), (
        8,
        1,
        10,
        '2004-2005',
        1,
        '32',
        1,
        'HOME',
        '2-0',
        NULL,
        NULL,
        'FINISHED',
        '2005-04-17 16:00:00'
    ), (
        9,
        1,
        8,
        '2004-2005',
        1,
        '34',
        1,
        'HOME',
        '2-0',
        NULL,
        NULL,
        'FINISHED',
        '2005-05-01 14:00:00'
    );

UNLOCK TABLES;

--

-- Dumping data for table `goal`

--

LOCK TABLES `goal` WRITE;

INSERT INTO `goal`
VALUES (1, 2, 3, 1, 1, 'DEFAULT', '9'), (2, 3, 4, 2, 1, 'DEFAULT', '39'), (3, 4, 0, 2, 1, 'PENALTY', '43'), (4, 3, 5, 2, 1, 'DEFAULT', '90+2'), (5, 6, 0, 3, 5, 'DEFAULT', '103'), (6, 3, 2, 4, 1, 'DEFAULT', '24'), (7, 2, 3, 4, 1, 'DEFAULT', '29'), (8, 5, 2, 4, 1, 'DEFAULT', '72'), (9, 3, 5, 4, 1, 'DEFAULT', '89'), (10, 7, 8, 5, 7, 'DEFAULT', '14'), (11, 7, 9, 5, 7, 'DEFAULT', '22'), (12, 5, 0, 6, 1, 'DEFAULT', '2'), (13, 10, 11, 6, 8, 'DEFAULT', '73'), (14, 12, 0, 6, 1, 'DEFAULT', '77'), (15, 2, 0, 7, 1, 'FREE_KICK', '35'), (16, 13, 14, 7, 9, 'DEFAULT', '60'), (17, 3, 4, 7, 1, 'DEFAULT', '86'), (18, 4, 0, 8, 1, 'FREE_KICK', '25'), (19, 15, 4, 8, 1, 'DEFAULT', '55'), (20, 3, 4, 9, 1, 'DEFAULT', '66'), (21, 1, 4, 9, 1, 'DEFAULT', '90+1');

UNLOCK TABLES;

--

-- Dumping data for table `player`

--

LOCK TABLES `player` WRITE;

INSERT INTO `player`
VALUES (1, 'Lionel Messi'), (2, 'Deco'), (3, 'Samuel Eto\'o'), (4, 'Ronaldinho'), (5, 'Andres Iniesta'), (6, 'Óscar Ollés'), (7, 'Julius Aghahowa'), (8, 'Matuzalém'), (9, 'Brandão'), (10, 'Mark González'), (11, 'Antonio Pacheco'), (12, 'Xavi'), (13, 'Jofre'), (14, 'Félix Ettien'), (15, 'Ludovic Giuly');

UNLOCK TABLES;

--

-- Dumping data for table `stadium`

--

LOCK TABLES `stadium` WRITE;

INSERT INTO `stadium`
VALUES (1, 'Camp Nou'), (
        2,
        'Estadi Olímpic Lluís Companys'
    ), (
        3,
        'Nou Camp Municipal de Santa Coloma'
    ), (4, 'RSC Olimpiyskiy'), (5, 'Estadio Carlos Belmonte');

UNLOCK TABLES;