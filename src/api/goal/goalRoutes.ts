import fp from 'fastify-plugin';
import { FastifyPluginAsync } from 'fastify';
import { goalService } from './goalService';

interface Params {
  id: string;
}

export const goalRoutes: FastifyPluginAsync = fp(async (fastify) => {
  await fastify.register(goalService);

  fastify.get('/goals', async (request, reply) => {
    const goals = await fastify.goalService.getGoals();
    reply.send(goals);
  });

  fastify.get<{
    Params: Params;
  }>('/goals/:id', async (request, reply) => {
    const id = Number(request.params.id);
    const goal = await fastify.goalService.getGoal(id);
    reply.send(goal);
  });
});
