import fp from 'fastify-plugin';
import { MySQLPromisePool } from 'fastify-mysql';
import { getGamesSQL, getGameSQL } from './sql';
import { GameRow, GetGamesQuery } from '../types';
import { IGameRepository } from './types';

class GameRepository implements IGameRepository {
  mysql: MySQLPromisePool;

  constructor(mysql: MySQLPromisePool) {
    this.mysql = mysql;
  }

  getGames = async (query?: GetGamesQuery) => {
    const connection = await this.mysql.getConnection();
    const [rows] = await connection.execute<GameRow[]>(getGamesSQL(query));

    connection.release();

    return rows;
  };

  getGame = async (id: number) => {
    const connection = await this.mysql.getConnection();
    const [rows] = await connection.execute<GameRow[]>(getGameSQL(id));

    connection.release();

    return rows[0];
  };
}

export const gameRepository = fp(async (fastify) => {
  fastify.decorate('gameRepository', new GameRepository(fastify.mysql));
});
