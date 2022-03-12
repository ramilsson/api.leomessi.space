import { MySQLPromisePool } from 'fastify-mysql';
import { GameRow, GetGamesQuery } from '../types';

export interface IGameRepository {
  mysql: MySQLPromisePool;

  getGames: (query?: GetGamesQuery) => Promise<GameRow[]>;
  getGame: (id: number) => Promise<GameRow>;
}
