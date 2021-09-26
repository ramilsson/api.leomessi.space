import fp from 'fastify-plugin';
import { FastifyPluginAsync } from 'fastify';

import mysql from './mysql';

const plugins: FastifyPluginAsync = async (fastify) => {
  fastify.register(mysql);
};

export default fp(plugins);
