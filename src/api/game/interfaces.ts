import { MySQLPromisePool } from 'fastify-mysql';
import { GameRow, Game } from './types';

export interface IGameRepository {
  mysql: MySQLPromisePool;

  getGames: () => Promise<GameRow[]>;
  getGame: (id: number) => Promise<GameRow>;
}

export interface IGameService {
  repository: IGameRepository;

  getGames: () => Promise<Game[]>;
  getGame: (id: number) => Promise<Game>;
}
