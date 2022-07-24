import fp from 'fastify-plugin';
import { FastifyPluginAsync } from 'fastify';
import { MySQLPromisePool } from 'fastify-mysql';
import { getGoalsSQL, getGoalSQL } from './sql';
import { GoalListQuery } from '../goal.types';
import { GoalRow, IGoalRepository } from './types';

class GoalRepository implements IGoalRepository {
  mysql: MySQLPromisePool;

  constructor(mysql: MySQLPromisePool) {
    this.mysql = mysql;
  }

  getGoals = async (query?: GoalListQuery): Promise<GoalRow[]> => {
    const connection = await this.mysql.getConnection();
    const [rows] = await connection.execute<GoalRow[]>(getGoalsSQL(query));
    connection.release();

    return rows;
  };

  getGoal = async (id: number): Promise<GoalRow> => {
    const connection = await this.mysql.getConnection();
    const [rows] = await connection.execute<GoalRow[]>(getGoalSQL(id));
    connection.release();

    return rows[0];
  };
}

export const goalRepository: FastifyPluginAsync = fp(async (fastify) => {
  fastify.decorate('goalRepository', new GoalRepository(fastify.mysql));
});
