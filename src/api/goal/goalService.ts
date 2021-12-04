import fp from 'fastify-plugin';
import { FastifyPluginAsync } from 'fastify';
import { goalRepository } from './goalRepository';
import { IGoalRepository, IGoalService } from './interfaces';
import { GoalsParams } from './types';

class GoalService implements IGoalService {
  repository: IGoalRepository;

  constructor(repository: IGoalRepository) {
    this.repository = repository;
  }

  getGoals = async (params?: GoalsParams) => {
    const goals = await this.repository.getGoals(params);
    return goals;
  };

  getGoal = async (id: number) => {
    const goal = await this.repository.getGoal(id);
    return goal;
  };
}

export const goalService: FastifyPluginAsync = fp(async (fastify) => {
  await fastify.register(goalRepository);
  fastify.decorate('goalService', new GoalService(fastify.goalRepository));
});
