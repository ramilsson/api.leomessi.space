import fp from 'fastify-plugin';
import { FastifyPluginAsync } from 'fastify';
import { goalController } from './goal.controller';
import { IGoalRepository } from './goal.repository';
import { IGoalService } from './goal.service';
import { GoalSchema } from './goal.schema';

declare module 'fastify' {
  interface FastifyInstance {
    goalRepository: IGoalRepository;
    goalService: IGoalService;
  }
}

export const goalApi: FastifyPluginAsync = fp(async (fastify) => {
  fastify.register(goalController);
  fastify.addSchema(GoalSchema);
});
