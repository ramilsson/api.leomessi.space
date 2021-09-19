import fp from 'fastify-plugin';
import gamesRoute from './games';
import { FastifyInstance } from 'fastify';

const routes = async (fastify: FastifyInstance) => {
  fastify.register(gamesRoute);
};

export default fp(routes);
