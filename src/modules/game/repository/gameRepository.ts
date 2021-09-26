import fp from 'fastify-plugin';
import { FastifyPluginAsync } from 'fastify';
import { MySQLPromisePool } from 'fastify-mysql';
import { IGameRepository, IGameRow } from './types';

export class GameRepository implements IGameRepository {
  mysql: MySQLPromisePool;

  constructor(mysql: MySQLPromisePool) {
    this.mysql = mysql;
  }

  getGames = async (): Promise<IGameRow[]> => {
    const connection = await this.mysql.getConnection();
    const [rows] = await connection.execute<IGameRow[]>(`
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

    return rows;
  };

  getGame = async (id: number): Promise<IGameRow> => {
    const connection = await this.mysql.getConnection();
    const [rows] = await connection.execute<IGameRow[]>(`
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

    return rows[0];
  };
}

declare module 'fastify' {
  interface FastifyInstance {
    gameRepository: GameRepository;
  }
}

const gameRepository: FastifyPluginAsync = async (fastify) => {
  fastify.decorate('gameRepository', new GameRepository(fastify.mysql));
};

export default fp(gameRepository);
