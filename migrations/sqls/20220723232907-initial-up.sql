DROP TABLE IF EXISTS `club`;

CREATE TABLE
    `club` (
        `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
        `name` varchar(128) NOT NULL DEFAULT 'Unnamed',
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8;

DROP TABLE IF EXISTS `competition`;

CREATE TABLE
    `competition` (
        `id` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
        `name` varchar(128) NOT NULL DEFAULT 'Unnamed Competition',
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 4 DEFAULT CHARSET = utf8;

DROP TABLE IF EXISTS `game`;

CREATE TABLE
    `game` (
        `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
        `team_id` smallint(5) unsigned NOT NULL,
        `opponent_id` smallint(5) unsigned NOT NULL,
        `season` varchar(9) NOT NULL,
        `competition_id` tinyint(3) unsigned NOT NULL,
        `round` varchar(5) DEFAULT NULL,
        `stadium_id` tinyint(3) unsigned NOT NULL,
        `field` enum('HOME', 'AWAY') DEFAULT NULL,
        `fulltime_result` varchar(5) DEFAULT NULL,
        `overtime_result` varchar(5) DEFAULT NULL,
        `penalty_result` varchar(5) DEFAULT NULL,
        `status` enum(
            'NOT_STARTED',
            'STARTED',
            'FINISHED',
            'CANCELED'
        ) NOT NULL DEFAULT 'NOT_STARTED',
        `datetime` timestamp NULL DEFAULT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 10 DEFAULT CHARSET = utf8;

DROP TABLE IF EXISTS `goal`;

CREATE TABLE
    `goal` (
        `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
        `player_id` smallint(5) unsigned NOT NULL,
        `assistant_id` smallint(5) unsigned DEFAULT NULL,
        `game_id` smallint(5) unsigned NOT NULL,
        `team_id` tinyint(3) unsigned NOT NULL,
        `type` enum(
            'DEFAULT',
            'PENALTY',
            'FREE_KICK',
            ''
        ) NOT NULL DEFAULT 'DEFAULT',
        `timing` varchar(6) NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 22 DEFAULT CHARSET = utf8;

DROP TABLE IF EXISTS `migrations`;

CREATE TABLE
    `migrations` (
        `id` int(11) NOT NULL AUTO_INCREMENT,
        `name` varchar(255) NOT NULL,
        `run_on` datetime NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 4 DEFAULT CHARSET = utf8;

DROP TABLE IF EXISTS `player`;

CREATE TABLE
    `player` (
        `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
        `name` varchar(64) NOT NULL DEFAULT 'Unknown Player',
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 16 DEFAULT CHARSET = utf8;

DROP TABLE IF EXISTS `stadium`;

CREATE TABLE
    `stadium` (
        `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
        `name` varchar(128) NOT NULL DEFAULT 'Unnamed Stadium',
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 6 DEFAULT CHARSET = utf8;