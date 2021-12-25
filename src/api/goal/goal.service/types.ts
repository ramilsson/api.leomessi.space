import { Goal, GetGoalsQuery } from '../types';
import { IGoalRepository } from '../goal.repository/types';

export interface IGoalService {
  repository: IGoalRepository;

  getGoals: (query?: GetGoalsQuery) => Promise<Goal[]>;
  getGoal: (id: number) => Promise<Goal>;
}
