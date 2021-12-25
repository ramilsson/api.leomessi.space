import { MySQLPromisePool } from 'fastify-mysql';
import { Goal, GetGoalsQuery } from '../types';

export interface IGoalRepository {
  mysql: MySQLPromisePool;

  getGoals: (query?: GetGoalsQuery) => Promise<Goal[]>;
  getGoal: (id: number) => Promise<Goal>;
}
