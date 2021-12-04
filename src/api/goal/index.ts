import fp from 'fastify-plugin';
import { FastifyPluginAsync } from 'fastify';

import { goalRoutes } from './goalRoutes';

import { IGoalRepository, IGoalService } from './interfaces';

declare module 'fastify' {
  interface FastifyInstance {
    goalRepository: IGoalRepository;
    goalService: IGoalService;
  }
}

export const goalApi: FastifyPluginAsync = fp(async (fastify) => {
  fastify.register(goalRoutes);
});
