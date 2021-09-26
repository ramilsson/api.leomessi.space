import fp from 'fastify-plugin';
import { GAME_STATUSES } from './constants';
import { formatResult } from './helpers';
import { FastifyPluginAsync } from 'fastify';
import { MySQLPromisePool } from 'fastify-mysql';

interface IGameService {
  mysql: MySQLPromisePool;

  getGames: () => void;
  getGame: (id: number) => void;
}

class GameService implements IGameService {
  mysql: MySQLPromisePool;

  constructor(mysql: MySQLPromisePool) {
    this.mysql = mysql;
  }

  getGames = async () => {
    const connection = await this.mysql.getConnection();
    const [result] = await connection.execute(`
      SELECT
      games.id 'id',
      json_object (
        'id', team.id,
        'name', team.name
      ) 'team',
      json_object (
        'id', opponent.id,
        'name', opponent.name
      ) 'opponent',
      json_object (
        'id', competitions.id,
        'name', competitions.name
      ) 'competition',
      games.season 'season',
      games.round 'round',
      games.field 'field',
      json_object (
        'id', stadiums.id,
        'name', stadiums.name
      ) 'stadium',
      games.status 'status',
      games.datetime 'datetime',
      json_object (
        'fulltime', games.fulltime_result,
        'overtime', games.overtime_result,
        'penalty', games.penalty_result
      ) 'result'
      FROM games
      LEFT JOIN teams AS team ON games.team = team.id
      LEFT JOIN teams AS opponent ON games.opponent = opponent.id
      LEFT JOIN competitions ON games.competition = competitions.id
      LEFT JOIN stadiums ON games.stadium = stadiums.id
      GROUP BY games.id
    `);

    connection.release();

    return result;

    // const games = result.map((game) => {
    //   if (game.status === GAME_STATUSES.FINISHED && game.result.fulltime) {
    //     game.result = formatResult(game.result);
    //   }
    //   return game;
    // });

    // return games;
  };

  getGame = async (id: number) => {
    const connection = await this.mysql.getConnection();
    const result = await connection.execute(`
      SELECT
      games.id 'id',
      json_object (
        'id', team.id,
        'name', team.name
      ) 'team',
      json_object (
          'id', opponent.id,
          'name', opponent.name
      ) 'opponent',
      json_object (
        'id', competitions.id,
        'name', competitions.name
      ) 'competition',
      games.season 'season',
      games.round 'round',
      games.field 'field',
      json_object (
        'id', stadiums.id,
        'name', stadiums.name
      ) 'stadium',
      games.status 'status',
      games.datetime 'datetime',
      json_object (
        'fulltime', games.fulltime_result,
        'overtime', games.overtime_result,
        'penalty', games.penalty_result
      ) 'result'
      FROM games
      LEFT JOIN teams AS team ON games.team = team.id
      LEFT JOIN teams AS opponent ON games.opponent = opponent.id
      LEFT JOIN competitions ON games.competition = competitions.id
      LEFT JOIN stadiums ON games.stadium = stadiums.id
      WHERE games.id = ${id}
      LIMIT 1
    `);

    connection.release();

    return result;

    // const [game] = result;

    // if (game.status === GAME_STATUSES.FINISHED && game.result.fulltime) {
    //   game.result = formatResult(game.result);
    // }

    // return game;
  };
}

declare module 'fastify' {
  interface FastifyInstance {
    gameService: GameService;
  }
}

const gameService: FastifyPluginAsync<{mysql: MySQLPromisePool}> = async (fastify, opts) => {
  fastify.decorate('gameService', new GameService(opts.mysql));
};

export default fp(gameService);
