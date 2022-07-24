import { Game, GameListQuery } from '../types';
import { IGameRepository } from '../game.repository/types';

export interface IGameService {
  repository: IGameRepository;

  getGames: (query?: GameListQuery) => Promise<Game[]>;
  getGame: (id: number) => Promise<Game>;
}
