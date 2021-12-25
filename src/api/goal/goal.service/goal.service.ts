import fp from 'fastify-plugin';
import { FastifyPluginAsync } from 'fastify';
import { goalRepository, IGoalRepository } from '../goal.repository';
import { GetGoalsQuery } from '../types';
import { IGoalService } from './types';

class GoalService implements IGoalService {
  repository: IGoalRepository;

  constructor(repository: IGoalRepository) {
    this.repository = repository;
  }

  getGoals = async (query?: GetGoalsQuery) => {
    const goals = await this.repository.getGoals(query);
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
