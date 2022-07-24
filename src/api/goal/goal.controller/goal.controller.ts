import fp from 'fastify-plugin';
import { FastifyPluginAsync } from 'fastify';
import { goalService } from '../goal.service';
import { GetGoalsRoute, GetGoalRoute } from './types';
import { GET_GOALS_SCHEMA, GET_GOAL_SCHEMA } from '../goal.schema';

export const goalController: FastifyPluginAsync = fp(async (fastify) => {
  await fastify.register(goalService);

  fastify.route<GetGoalsRoute>({
    method: 'GET',
    url: '/goals',
    schema: GET_GOALS_SCHEMA,
    handler: async (request) => {
      const query = request.query;
      const goals = await fastify.goalService.getGoals(query);
      return goals;
    },
  });

  fastify.route<GetGoalRoute>({
    method: 'GET',
    url: '/goals/:id',
    schema: GET_GOAL_SCHEMA,
    handler: async (request, reply) => {
      const id = request.params.id;
      const goal = await fastify.goalService.getGoal(id);
      reply.send(goal);
    },
  });
});
