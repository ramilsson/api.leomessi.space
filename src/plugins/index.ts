import fp from 'fastify-plugin';
import { FastifyPluginAsync } from 'fastify';

import { mysql } from './mysql';
import { swagger } from './swagger';

export const plugins: FastifyPluginAsync = fp(async (fastify) => {
  fastify.register(mysql);
  fastify.register(swagger);
});
