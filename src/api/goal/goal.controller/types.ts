import { GoalListQuery, GetGoalParams } from '../goal.types';

export interface GetGoalsRoute {
  Querystring: GoalListQuery;
}

export interface GetGoalRoute {
  Params: GetGoalParams;
}
