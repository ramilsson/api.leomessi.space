import { GoalListQuery, GetGoalParams } from '../types';

export interface GetGoalsRoute {
  Querystring: GoalListQuery;
}

export interface GetGoalRoute {
  Params: GetGoalParams;
}
