import fp from 'fastify-plugin';
import { FastifyPluginAsync } from 'fastify';
import { MySQLPromisePool } from 'fastify-mysql';
import { getGoalsSQL, getGoalSQL } from './sql';
import { Goal, GetGoalsQuery } from '../types';
import { IGoalRepository } from './types';

class GoalRepository implements IGoalRepository {
  mysql: MySQLPromisePool;

  constructor(mysql: MySQLPromisePool) {
    this.mysql = mysql;
  }

  getGoals = async (query?: GetGoalsQuery): Promise<Goal[]> => {
    const connection = await this.mysql.getConnection();
    const [rows] = await connection.execute<Goal[]>(getGoalsSQL(query));
    connection.release();

    return rows;
  };

  getGoal = async (id: number): Promise<Goal> => {
    const connection = await this.mysql.getConnection();
    const [rows] = await connection.execute<Goal[]>(getGoalSQL(id));
    connection.release();

    return rows[0];
  };
}

export const goalRepository: FastifyPluginAsync = fp(async (fastify) => {
  fastify.decorate('goalRepository', new GoalRepository(fastify.mysql));
});
