import { Goal, GoalListQuery } from '../types';
import { IGoalRepository } from '../goal.repository/types';

export interface IGoalService {
  repository: IGoalRepository;

  getGoals: (query?: GoalListQuery) => Promise<Goal[]>;
  getGoal: (id: number) => Promise<Goal>;
}
