import { FastifyPluginAsync } from 'fastify';
import { gameApi } from './game';
import { goalApi } from './goal';

export const api: FastifyPluginAsync = async (fastify) => {
  fastify.register(gameApi);
  fastify.register(goalApi);
};
