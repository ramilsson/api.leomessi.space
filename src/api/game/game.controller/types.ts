import { GameListQuery, GameParams } from '../types';

export interface GetGamesRoute {
  Querystring: GameListQuery;
}

export interface GetGameRoute {
  Params: GameParams;
}
