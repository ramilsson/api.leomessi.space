import { GameListQuery, GameParams } from '../game.types';

export interface GetGamesRoute {
  Querystring: GameListQuery;
}

export interface GetGameRoute {
  Params: GameParams;
}
