import { MySQLPromisePool } from 'fastify-mysql';
import { GoalRow, GoalsParams } from './types';

export interface IGoalRepository {
  mysql: MySQLPromisePool;

  getGoals: (params?: GoalsParams) => Promise<GoalRow[]>;
  getGoal: (id: number) => Promise<GoalRow>;
}

export interface IGoalService {
  repository: IGoalRepository;

  getGoals: (params?: GoalsParams) => Promise<GoalRow[]>;
  getGoal: (id: number) => Promise<GoalRow>;
}
