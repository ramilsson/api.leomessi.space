import { MySQLPromisePool } from 'fastify-mysql';
import { RowDataPacket } from 'mysql2';
import { Game, GameListQuery } from '../game.types';

export type GameRowResult = {
  fulltime: string | null;
  overtime: string | null;
  penalty: string | null;
};

export interface GameRow extends Omit<Game, 'result'>, RowDataPacket {
  result: GameRowResult;
}

export interface IGameRepository {
  mysql: MySQLPromisePool;

  getGames: (query?: GameListQuery) => Promise<GameRow[]>;
  getGame: (id: number) => Promise<GameRow>;
}
