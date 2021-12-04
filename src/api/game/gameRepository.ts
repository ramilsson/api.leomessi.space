import fp from 'fastify-plugin';
import { FastifyPluginAsync } from 'fastify';
import { MySQLPromisePool } from 'fastify-mysql';
import { getGamesSQL, getGameSQL } from './sql';
import { IGameRepository } from './interfaces';
import { GameRow } from './types';

class GameRepository implements IGameRepository {
  mysql: MySQLPromisePool;

  constructor(mysql: MySQLPromisePool) {
    this.mysql = mysql;
  }

  getGames = async (): Promise<GameRow[]> => {
    const connection = await this.mysql.getConnection();
    const [rows] = await connection.execute<GameRow[]>(getGamesSQL());

    connection.release();

    return rows;
  };

  getGame = async (id: number): Promise<GameRow> => {
    const connection = await this.mysql.getConnection();
    const [rows] = await connection.execute<GameRow[]>(getGameSQL(id));

    connection.release();

    return rows[0];
  };
}

export const gameRepository: FastifyPluginAsync = fp(async (fastify) => {
  fastify.decorate('gameRepository', new GameRepository(fastify.mysql));
});
