import { MySQLPromisePool } from 'fastify-mysql';
import { GameRow } from './types';

export interface IGameRepository {
  mysql: MySQLPromisePool;

  getGames: () => Promise<GameRow[]>;
  getGame: (id: number) => Promise<GameRow>;
}

export interface IGameService {
  repository: IGameRepository;

  getGames: () => Promise<GameRow[]>;
  getGame: (id: number) => Promise<GameRow>;
}
