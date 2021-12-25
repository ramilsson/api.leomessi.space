import { GetGoalsQuery, GetGoalParams } from '../types';

export interface GetGoalsRoute {
  Querystring: GetGoalsQuery;
}

export interface GetGoalRoute {
  Params: GetGoalParams;
}
