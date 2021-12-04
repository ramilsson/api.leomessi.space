import fp from 'fastify-plugin';
import { FastifyPluginAsync } from 'fastify';

import { mysql } from './mysql';

export const plugins: FastifyPluginAsync = fp(async (fastify) => {
  fastify.register(mysql);
});
