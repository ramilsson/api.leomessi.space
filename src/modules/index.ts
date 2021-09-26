import fp from 'fastify-plugin';
import { FastifyPluginAsync } from 'fastify';

import game from './game';

const modules: FastifyPluginAsync = async (fastify) => {
  fastify.register(game);
};

export default fp(modules);
