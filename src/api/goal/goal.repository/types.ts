import { MySQLPromisePool } from 'fastify-mysql';
import { RowDataPacket } from 'mysql2';
import { Goal, GoalListQuery } from '../goal.types';

export interface GoalRow extends Goal, RowDataPacket {}

export interface IGoalRepository {
  mysql: MySQLPromisePool;

  getGoals: (query?: GoalListQuery) => Promise<GoalRow[]>;
  getGoal: (id: number) => Promise<GoalRow>;
}
