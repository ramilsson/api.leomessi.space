import fp from 'fastify-plugin';
import { FastifyPluginAsync } from 'fastify';
import { MySQLPromisePool } from 'fastify-mysql';
import { IGoalRepository } from './interfaces';
import { GoalRow, GoalsParams } from './types';

class GoalRepository implements IGoalRepository {
  mysql: MySQLPromisePool;

  constructor(mysql: MySQLPromisePool) {
    this.mysql = mysql;
  }

  getGoals = async (params?: GoalsParams): Promise<GoalRow[]> => {
    const connection = await this.mysql.getConnection();
    const [rows] = await connection.execute<GoalRow[]>(`SELECT * from goals`);

    connection.release();

    return rows;
  };

  getGoal = async (id: number): Promise<GoalRow> => {
    const connection = await this.mysql.getConnection();
    const [rows] = await connection.execute<GoalRow[]>(``);

    connection.release();

    return rows[0];
  };
}

export const goalRepository: FastifyPluginAsync = fp(async (fastify) => {
  fastify.decorate('goalRepository', new GoalRepository(fastify.mysql));
});
