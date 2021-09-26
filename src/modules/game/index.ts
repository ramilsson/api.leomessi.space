import fp from 'fastify-plugin';
import { FastifyPluginAsync } from 'fastify';

import gameRoutes from './routes';

const game: FastifyPluginAsync = async (fastify) => {
  fastify.register(gameRoutes);
};

export default fp(game);
