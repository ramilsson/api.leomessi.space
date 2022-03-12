import { Game, GetGamesQuery } from '../types';
import { IGameRepository } from '../game.repository/types';

export interface IGameService {
  repository: IGameRepository;

  getGames: (query?: GetGamesQuery) => Promise<Game[]>;
  getGame: (id: number) => Promise<Game>;
}
