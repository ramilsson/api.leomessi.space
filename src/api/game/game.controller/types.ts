import { GetGamesQuery, GetGameParams } from '../types';

export interface GetGamesRoute {
  Querystring: GetGamesQuery;
}

export interface GetGameRoute {
  Params: GetGameParams;
}
